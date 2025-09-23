import type { NextConfig } from "next";


const nextConfig = {
  basePath: '/mxlding',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;

export default nextConfig;
