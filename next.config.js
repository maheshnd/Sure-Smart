/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "build", // Set your desired build directory
  output: "static", // Use "static" for exporting a static site
};

module.exports = nextConfig;
