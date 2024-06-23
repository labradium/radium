/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["next-mdx-remote"],
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
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg
