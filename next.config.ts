import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: "i.insider.com"
    }],
  },
};

export default nextConfig;
