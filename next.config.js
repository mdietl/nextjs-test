/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    experimental: {
        serverActions: true,
        // isrMemoryCacheSize: 0,
    },
}

module.exports = nextConfig
