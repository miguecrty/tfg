import React from 'react';

const Pie = () => {
  return (
    <footer
      className="bg-dark bg-opacity-75 text-white text-center py-2"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%', // Ancho completo de la página
        boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.5)',
        height: '5%'
      }}
    >
       <p
          className="text-white mb-5"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '0.9rem', // Ajusta el tamaño de la fuente según sea necesario
          }}
        >
          &copy; TFG [Monitorización] : Miguel Ángel López Rodríguez
        </p>
    </footer>
  );
}

export default Pie;
