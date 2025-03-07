/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		 {
			protocol: "https",
			hostname: "insightful-pheasant-325.convex.cloud",
		 },
	  ],
	},
 };
 
 export default nextConfig;
 

