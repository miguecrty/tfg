import '../styles/home.css'; // Importa estilos globales aquí


export const server = "localhost:3000";

function MyApp({ Component, pageProps }) {
  // Esta es la función MyApp que envuelve tus páginas
  return (

      <Component {...pageProps} />
  );
}

export default MyApp;