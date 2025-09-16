/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // To use next  Image it should be removed so comment the below code
  output: "export",

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Disable minification for JavaScript files in production
    if (!isServer && process.env.NODE_ENV === "production") {
      config.optimization.minimize = false;
    }

    return config;
  },
};
module.exports = nextConfig;
