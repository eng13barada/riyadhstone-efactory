/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // DO NOT ADD ESLINT CONFIG HERE. IT BREAKS THE BUILD.
};
export default nextConfig;
