/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { PROJECT_NAME: process.env.PROJECT_NAME, }
}

module.exports = nextConfig
