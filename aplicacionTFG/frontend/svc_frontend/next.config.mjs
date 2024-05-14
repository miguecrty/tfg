/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVIDOR: 'http://backend:3000',
        GOOGLEAPI:process.env.GOOGLEAPI
      },
};

export default nextConfig;
