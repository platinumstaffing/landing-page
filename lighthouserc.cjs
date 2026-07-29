const baseUrl = process.env.E2E_BASE_URL ?? "http://127.0.0.1:3000";

module.exports = {
  ci: {
    collect: {
      url: [
        `${baseUrl}/`,
        `${baseUrl}/employers`,
        `${baseUrl}/job-seekers`,
        `${baseUrl}/contact`,
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: "--no-sandbox --headless",
      },
      ...(process.env.E2E_BASE_URL
        ? {}
        : {
            startServerCommand: "pnpm start",
            startServerReadyPattern: "Ready",
          }),
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:performance": ["error", { minScore: 0.85 }],
        "categories:seo": ["error", { minScore: 1 }],
        "resource-summary:script:size": ["error", { maxNumericValue: 400000 }],
        "resource-summary:image:size": ["error", { maxNumericValue: 1800000 }],
        "uses-http2": "off",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
