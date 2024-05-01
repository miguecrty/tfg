import '../styles/home.css'; // Importa estilos globales aquí

function MyApp({ Component, pageProps }) {
  // Esta es la función MyApp que envuelve tus páginas
  return <Component {...pageProps} />;
}

export default MyApp;