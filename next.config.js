/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const url = new URL(baseUrl);

console.log({ url });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["127.0.0.1"],
  },
};

module.exports = nextConfig;
