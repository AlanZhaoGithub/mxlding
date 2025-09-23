import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';



const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/mxlding" : '',
  assetPrefix: isProd ? "/mxlding": '',
  images: {unoptimized: true}
};

export default nextConfig;
