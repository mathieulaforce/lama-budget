/** @type {import('next').NextConfig} */
await import("./src/env.mjs");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig;
