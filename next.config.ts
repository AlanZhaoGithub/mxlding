import type { NextConfig } from "next";


const isProd = process.env.NODE_ENV === 'production';

module.exports = { basePath: isProd ? '/mxlding/' : '', 
  assetPrefix: isProd ? '/mxlding/' : '', 
  images: { unoptimized: true, // GitHub Pages does not support Next.js image optimization 
  }, };
const nextConfig: NextConfig = {
  /*
  output: "export",
  reactStrictMode: true,
  basePath: "/mxlding" 
  */
};

export default nextConfig;
