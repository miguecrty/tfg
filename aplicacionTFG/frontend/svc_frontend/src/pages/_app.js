import '../styles/home.css'; // Importa estilos globales aquí

export const server = "localhost:3000";


function MyApp({ Component, pageProps }) {
  
  return (

      <Component {...pageProps} />
  );
}

export default MyApp;