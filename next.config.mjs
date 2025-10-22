/** @type {import('next').NextConfig} */
const nextConfig = {
  "scripts": {
  "build": "NEXT_IGNORE_ESLINT=1 next build"
},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
