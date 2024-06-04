import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const server = process.env.SERVER || "localhost:3000";
export const googleApiKey = process.env.GOOGLE_API_KEY || "AIzaSyBsZnTlM4g1LCqmg4u74pouNXE3mlQF6Uk";

function MyApp({ Component, pageProps }) {

  return (

      <Component {...pageProps} />
  );
}

export default MyApp;