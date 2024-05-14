const nextConfig = {
    env: {
      SERVIDOR: 'http://backend:3000',
      GOOGLEAPI: process.env.GOOGLEAPI || 'tu_clave_de_API_de_Google',
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://backend:3000/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  