/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, poweredByHeader: false, images: { formats: ["image/avif", "image/webp"], deviceSizes: [640,768,1024,1280,1600,1920,2400], imageSizes: [16,32,64,128,256,384] } };
export default nextConfig;
