import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tfg({ Component, pageProps }) {

  return (

      <Component {...pageProps} />
  );
}

export default Tfg;

export const server = process.env.SERVER || "localhost:3000";
export const googleApiKey = process.env.GOOGLE_API_KEY || "AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk";