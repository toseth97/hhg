/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "elementor.zozothemes.com",
            },
        ],
    },
};

export default nextConfig;
