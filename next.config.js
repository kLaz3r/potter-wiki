/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
});
const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '/hpapi/**',
            },
        ],
    },
};

module.exports = withPWA(nextConfig);
