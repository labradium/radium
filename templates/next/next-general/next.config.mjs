/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eo4grnhr9puxdgdq.public.blob.vercel-storage.com",
        port: "",
        pathname: "/radium/**",
      },
    ],
  },
};

export default nextConfig;

// https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/radium/radium-banner.png
