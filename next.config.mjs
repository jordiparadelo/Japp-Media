/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: 'dist',
	experimental: {
		appDir: true,
	},
	// Add this line to specify the source directory
	dir: './src',
};

export default nextConfig;
