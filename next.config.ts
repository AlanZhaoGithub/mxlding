import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

console.log("NODE_ENV:", process.env.NODE_ENV);

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {unoptimized: true}
};

export default nextConfig;
