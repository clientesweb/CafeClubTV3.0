/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig

