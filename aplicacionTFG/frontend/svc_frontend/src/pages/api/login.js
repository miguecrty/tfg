export async function getServerSideProps(context) {
    const { req, res } = context;
  
    // Realiza la solicitud al servidor backend
    const backendResponse = await fetch('http://backend:3000/api/login', {
      method: req.method,
      headers: {
        ...req.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
  
    // Lee la respuesta del backend
    const data = await backendResponse.json();
  
    // Devuelve los datos obtenidos del backend como props para la página
    return {
      props: { data },
    };
  }