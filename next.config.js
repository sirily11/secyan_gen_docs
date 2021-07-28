const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs",
        statusCode: 301,
      },
    ];
  },
});
