/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
        // Disable image optimization during export
        unoptimized: true,
      },
};

module.exports = nextConfig

