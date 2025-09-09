import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rapid-sardine-332.convex.cloud"
      },
      {
        hostname: "charming-ocelot-993.convex.cloud"
      }
    ],
  }
};


export default nextConfig;
