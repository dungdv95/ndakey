import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  typedRoutes: true,
  // experimental: {
  //   globalNotFound: true,
  // },
  // output: "standalone",
};

export default nextConfig;
