import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  typedRoutes: true,
  experimental: {
    globalNotFound: true,
  },
  env: {
    NEXT_PUBLIC_BLOG_API:
      process.env.NEXT_PUBLIC_BLOG_API ?? "NEXT_PUBLIC_BLOG_API",
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ??
      "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
    NEXT_PUBLIC_BLOG_APPLICATION:
      process.env.NEXT_PUBLIC_BLOG_APPLICATION ??
      "NEXT_PUBLIC_BLOG_APPLICATION",
    NEXT_PUBLIC_META_DATA_URL:
      process.env.NEXT_PUBLIC_META_DATA_URL ?? "NEXT_PUBLIC_META_DATA_URL",
    NEXT_PUBLIC_MIXPANEL_TOKEN:
      process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? "NEXT_PUBLIC_MIXPANEL_TOKEN",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-sgn10.fptcloud.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.nomion.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /* config options here */
  output: "standalone",
};

export default nextConfig;
