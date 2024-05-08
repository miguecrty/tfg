import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';
import Cookies from 'js-cookie';


const Pronostico = () => {
    const username = Cookies.get('username');
    

    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            <Cabecera mostrarBotonHome={true}/>
            <div className="seleccion">
                <h2>PARTE DE ARRIBA</h2>
            </div>
            <div className="dias">
                <h2>PARTE DE ABAJO</h2>
                <div className="dia1">
                    DIA1
                </div>
                <div className="dia2">
                DIA2
                </div>
                <div className="dia3">
                DIA3
                </div>
                <div className="dia4">
                DIA4
                </div>
                <div className="dia5">
                DIA5
                </div>
            </div>
            <Pie/>
        </div>
        
    ); 
};

export default Pronostico;
