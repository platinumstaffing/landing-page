"use client";

import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Texture, Triangle } from "ogl";

/**
 * WebGL hero: renders a photo through a navy duotone + fine film grain, with a
 * subtle scroll-reactive parallax. Brands off-palette photography toward the
 * Platinum navy world until real workforce imagery is supplied.
 *
 * Progressive enhancement: if the context can't be created the parent keeps its
 * CSS-treated <img> fallback. Grain and parallax are disabled under reduced motion.
 */
type HeroCanvasProps = {
  src: string;
  /** Shared mutable scroll progress (0-1) written by GSAP, read each frame. */
  progressRef: React.MutableRefObject<number>;
  reducedMotion: boolean;
  className?: string;
  onReady?: () => void;
  onError?: () => void;
};

const VERT = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D uTexture;
  uniform vec2 uImageSize;
  uniform vec2 uPlaneSize;
  uniform float uTime;
  uniform float uProgress;
  uniform float uGrain;
  uniform vec3 uShadow;
  uniform vec3 uMid;
  uniform vec3 uHighlight;

  // cover-fit mapping so the photo fills the plane without distortion
  vec2 coverUv(vec2 uv, vec2 img, vec2 plane) {
    vec2 ratio = vec2(
      min((plane.x / plane.y) / (img.x / img.y), 1.0),
      min((plane.y / plane.x) / (img.y / img.x), 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    // subtle parallax: ease in toward the frame as the hero scrolls away
    vec2 p = vUv;
    float zoom = 1.0 - 0.06 * uProgress;
    p = (p - 0.5) * zoom + 0.5 + vec2(0.0, -0.035 * uProgress);

    vec2 uv = coverUv(p, uImageSize, uPlaneSize);
    vec3 src = texture2D(uTexture, uv).rgb;

    // luminance -> navy duotone with a cool mid bias
    float l = dot(src, vec3(0.299, 0.587, 0.114));
    l = smoothstep(0.04, 0.96, l);
    vec3 duo = mix(uShadow, uHighlight, l);
    duo = mix(duo, uMid, (1.0 - abs(l - 0.5) * 2.0) * 0.32);

    // deepen toward navy as the section hands off
    duo = mix(duo, uShadow, uProgress * 0.45);

    // vignette anchors overlaid type
    float d = distance(vUv, vec2(0.42, 0.5));
    duo = mix(duo, uShadow, smoothstep(0.35, 0.95, d) * 0.55);

    // fine film grain
    float g = (hash(gl_FragCoord.xy + uTime) - 0.5) * uGrain;
    duo += g;

    gl_FragColor = vec4(duo, 1.0);
  }
`;

export function HeroCanvas({
  src,
  progressRef,
  reducedMotion,
  className,
  onReady,
  onError,
}: HeroCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({
        alpha: false,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });
    } catch {
      onError?.();
      return;
    }

    const gl = renderer.gl;
    gl.clearColor(0.078, 0.125, 0.231, 1);
    const canvas = gl.canvas;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    host.appendChild(canvas);

    const texture = new Texture(gl, { generateMipmaps: false });
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTexture: { value: texture },
        uImageSize: { value: [1, 1] },
        uPlaneSize: { value: [1, 1] },
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uGrain: { value: reducedMotion ? 0 : 0.05 },
        uShadow: { value: [0.078, 0.125, 0.231] },
        uMid: { value: [0.118, 0.165, 0.267] },
        uHighlight: { value: [0.933, 0.945, 0.965] },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      if (!w || !h) return;
      renderer.setSize(w, h);
      program.uniforms.uPlaneSize.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
      ];
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    // pause when off-screen or tab hidden
    let onScreen = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && raf === 0) raf = requestAnimationFrame(frame);
      },
      { threshold: 0 },
    );
    io.observe(host);

    const img = new Image();
    img.decoding = "async";
    img.src = src;
    let ready = false;
    img.onload = () => {
      texture.image = img;
      program.uniforms.uImageSize.value = [
        img.naturalWidth,
        img.naturalHeight,
      ];
      ready = true;
      onReady?.();
    };
    img.onerror = () => onError?.();

    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      raf = 0;
      program.uniforms.uProgress.value = progressRef.current;
      if (ready) {
        if (!reducedMotion) {
          program.uniforms.uTime.value = (now - start) * 0.06;
        }
        renderer.render({ scene: mesh });
      }
      const animate = !reducedMotion || progressRef.current > 0;
      if (onScreen && (animate || !ready)) {
        raf = requestAnimationFrame(frame);
      }
    };
    raf = requestAnimationFrame(frame);

    // reduced motion still needs a repaint when scroll progress changes
    const kick = () => {
      if (raf === 0 && onScreen) raf = requestAnimationFrame(frame);
    };
    window.addEventListener("scroll", kick, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", kick);
      const ext = gl.getExtension("WEBGL_lose_context");
      ext?.loseContext();
      canvas.remove();
    };
  }, [src, progressRef, reducedMotion, onReady, onError]);

  return <div ref={hostRef} aria-hidden className={className} />;
}
