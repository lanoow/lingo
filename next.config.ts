import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	async headers() {
		return [
			{
				source: "/api/(.*)",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST, PUT, DELETE, OPTIONS",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization",
					},
					{
						key: "Content-Range",
						value: "bytes : 0-9/*",
					},
				],
			},
		];
	},
};

export default nextConfig;
