const nextConfig = {
    env: {
      SERVIDOR: 'http://backend:3000',
      GOOGLEAPI: process.env.GOOGLEAPI || 'tu_clave_de_API_de_Google',
    },
  };
  
  export default nextConfig;
  