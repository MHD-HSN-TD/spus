// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],
};

// module.exports = nextConfig;
export default withPlaiceholder(nextConfig);
