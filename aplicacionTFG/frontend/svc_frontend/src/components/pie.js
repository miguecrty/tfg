import React from 'react';

const Pie = () => {
  return (
    <div style={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Negro semi-transparente (0.8 es el valor alfa)
      color: 'white', 
      padding: '10px', 
      textAlign: 'center',
      position: 'fixed', // Fija el pie de página
      bottom: 0, // Lo coloca al fondo
      left: 0, // Lo coloca a la izquierda
      width: '100%', // Ancho completo
      boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.5)', // Sombra para efecto 3D
    }}>
      {/* Contenido de la barra */}
      <p>&copy; TFG [Monitorización] : Miguel Ángel López Rodríguez</p>
    </div>
  );
}

export default Pie;

