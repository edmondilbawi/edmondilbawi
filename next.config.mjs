/** @type {import('next').NextConfig} */
const basePath = "/edmondilbawi";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
