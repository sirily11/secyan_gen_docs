import { useRouter } from "next/router";

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "SECYAN Codegen",
  "zh-CN": "SECYAN Codegen",
};

export default {
  titleSuffix: " – SECYAN",
  search: false,
  unstable_stork: true,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <img src="/favicon.ico" width="40" />
        <span className="mx-2 font-extrabold hidden md:inline select-none">
          SECYAN
        </span>
        <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
          {TITLE_WITH_TRANSLATIONS[locale]}
        </span>
      </>
    );
  },
  head: (
    <>
      {/* Favicons, meta */}
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="SECYAN CodeGen Documentation" />
      <meta name="og:description" content="SECYAN CodeGen Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:image" content="favicon.ico" />
      <meta name="og:title" content="SECYAN: Next Gen CodeGen" />
      <meta
        name="apple-mobile-web-app-title"
        content="SECYAN CodeGen Documentation"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        onLoad="this.media='all'"
      />
    </>
  ),
  footer: false,
  i18n: [{ locale: "zh-CN", text: "简体中文" }],
};
