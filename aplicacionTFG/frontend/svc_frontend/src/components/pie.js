import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Pie = ({ ayuda, page, setMostrarAyuda }) => {
  return (
    <footer
      className="bg-dark bg-opacity-75 text-white py-2"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.5)',
        height: '5%'
      }}
    >
      <div className='row'>
        <p
          className="col text-white text-center"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '0.9rem',
          }}
        >
          &copy; TFG [Monitorización] : Miguel Ángel López Rodríguez
        </p>
        {ayuda && (
          <>
            Ayuda
            <FontAwesomeIcon
              icon={faCircleInfo}
              onMouseEnter={() => setMostrarAyuda(true)}
              onMouseLeave={() => setMostrarAyuda(false)}
              className='col-md-1 mr-2 mb-2'
              style={{ width: '25px', height: '25px' }}
            />
          </>
        )}
      </div>
    </footer>
  );
};

export default Pie;
