import type { NextConfig } from "next";

// Next.js emits a small inline bootstrap and Motion uses inline style attributes.
// Keep these two narrowly documented exceptions while denying external script sources.
// React DevTools/callstack reconstruction needs eval() in development only; production
// never includes 'unsafe-eval'.
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  process.env.NODE_ENV === "development" ? "'unsafe-eval'" : null,
  "https://challenges.cloudflare.com",
]
  .filter((part): part is string => part !== null)
  .join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  // googleapis is a large Node client; keep it external to the server bundle.
  serverExternalPackages: ["googleapis"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
