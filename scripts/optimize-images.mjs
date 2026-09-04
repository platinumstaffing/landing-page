import { readdir, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const repoRoot = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const pagesRoot = join(repoRoot, "public/brand/pages");

/**
 * Output dimensions from docs/SITEWIDE_IMAGE_PROMPTS.md.
 * Keys are the committed WebP stem relative to public/brand/pages/.
 */
const targets = {
  "about/about-hero": { width: 2400, height: 1500 },
  "about/company-journey": { width: 2100, height: 1400 },
  "about/mission-in-practice": { width: 1600, height: 2000 },
  "about/values-on-the-floor": { width: 1800, height: 1350 },
  "about/team-culture": { width: 2100, height: 1400 },
  "employers/employers-hero": { width: 2400, height: 1500 },
  "employers/workforce-overview": { width: 1600, height: 2000 },
  "employers/temporary-staffing": { width: 1800, height: 1350 },
  "employers/temp-to-hire": { width: 1800, height: 1350 },
  "employers/direct-hire": { width: 1800, height: 1350 },
  "employers/seasonal-staffing": { width: 1800, height: 1350 },
  "employers/high-volume-staffing": { width: 1800, height: 1350 },
  "employers/workforce-planning": { width: 1800, height: 1350 },
  "employers/process-handoff": { width: 2400, height: 1050 },
  "industries/industries-hero": { width: 2400, height: 1500 },
  "industries/manufacturing-team": { width: 1800, height: 1350 },
  "industries/distribution-flow": { width: 1800, height: 1350 },
  "industries/logistics-coordination": { width: 1800, height: 1350 },
  "industries/administrative-operations": { width: 1800, height: 1350 },
  "industries/customer-support-team": { width: 1800, height: 1350 },
  "industries/light-industrial-process": { width: 1800, height: 1350 },
  "job-seekers/job-seekers-hero": { width: 2400, height: 1500 },
  "job-seekers/career-center": { width: 2100, height: 1400 },
  "job-seekers/application-process": { width: 2400, height: 1050 },
  "job-seekers/resume-support": { width: 1600, height: 2000 },
  "job-seekers/recruiter-support": { width: 2100, height: 1400 },
  "jobs/jobs-hero": { width: 2400, height: 1500 },
  "jobs/opportunity-context": { width: 1600, height: 2000 },
  "jobs/workplace-opportunities": { width: 2400, height: 1350 },
  "contact/contact-hero": { width: 2400, height: 1500 },
  "contact/employer-conversation": { width: 1600, height: 2000 },
  "contact/candidate-conversation": { width: 1600, height: 2000 },
  "contact/service-area-operations": { width: 2100, height: 1400 },
  "resources/resources-hero": { width: 2400, height: 1500 },
  "resources/workforce-insights": { width: 1800, height: 1200 },
  "resources/industry-reports": { width: 1800, height: 1200 },
  "resources/employer-guides": { width: 1800, height: 1200 },
  "resources/career-advice": { width: 1800, height: 1200 },
  "resources/company-news": { width: 1800, height: 1200 },
  "resources/resource-desk": { width: 2100, height: 1400 },
};

const sourceAliases = {
  "contact/pennsylvania-operations": "contact/service-area-operations",
};

const jpegExtensions = new Set([".jpeg", ".jpg"]);

async function collectJpegFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectJpegFiles(path)));
      continue;
    }
    if (jpegExtensions.has(extname(entry.name).toLowerCase())) {
      files.push(path);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(sourcePath) {
  const relativePath = relative(pagesRoot, sourcePath).replaceAll("\\", "/");
  const stem = relativePath.replace(/\.(jpe?g)$/i, "");
  const outputStem = sourceAliases[stem] ?? stem;
  const target = targets[outputStem];

  if (!target) {
    throw new Error(
      `No dimension target for ${relativePath}. Add it to scripts/optimize-images.mjs.`,
    );
  }

  const outputPath = join(pagesRoot, `${outputStem}.webp`);
  const sourceStats = await stat(sourcePath);

  await sharp(sourcePath)
    .rotate()
    .resize(target.width, target.height, {
      fit: "cover",
      position: "centre",
      withoutEnlargement: false,
    })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const outputStats = await stat(outputPath);

  return {
    source: relativePath,
    output: `${outputStem}.webp`,
    sourceBytes: sourceStats.size,
    outputBytes: outputStats.size,
    width: target.width,
    height: target.height,
  };
}

const jpegFiles = await collectJpegFiles(pagesRoot);

if (jpegFiles.length === 0) {
  console.log("No JPEG sources found under public/brand/pages/.");
  process.exit(0);
}

const results = [];
for (const file of jpegFiles.sort()) {
  results.push(await optimizeFile(file));
}

const sourceTotal = results.reduce((sum, item) => sum + item.sourceBytes, 0);
const outputTotal = results.reduce((sum, item) => sum + item.outputBytes, 0);

console.log("Optimized page photography:\n");
for (const item of results) {
  console.log(
    `  ${item.source} → ${item.output} (${item.width}×${item.height}) ${formatBytes(item.sourceBytes)} → ${formatBytes(item.outputBytes)}`,
  );
}

console.log(
  `\n${results.length} file(s): ${formatBytes(sourceTotal)} JPEG → ${formatBytes(outputTotal)} WebP`,
);

const missing = Object.keys(targets).filter((stem) => {
  return !results.some((item) => item.output === `${stem}.webp`);
});

if (missing.length > 0) {
  console.log("\nMissing sources (skipped):");
  for (const stem of missing) {
    console.log(`  ${stem}.webp`);
  }
}
