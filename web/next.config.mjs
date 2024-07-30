/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odouepjkxheu5esn.public.blob.vercel-storage.com",
        port: "",
        pathname: "/silvercompany/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg
// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-favicon.png
