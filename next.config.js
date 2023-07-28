/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [__dirname, "scss"],
  },
};

module.exports = nextConfig;
