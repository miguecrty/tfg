import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script'

const Menu = () => {
    
    const router = useRouter();
    const handleItemClick = (url) => {
        router.push(url);
    };
    return (
        <>
        <div className='fondo'>
            <Script src="./js/menu.js" />
            <Head>
                <title>Menú principal</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./styles/menu.css" />
            </Head>
            <Cabecera showHomeButton={false} />
            <h1 className='display-2 text-center mt-2'>Menú principal</h1>
            <div className="containerP d-flex flex-wrap justify-content-around mt-4">
                <div  className="bg-white bg-opacity-50 card  "  onClick={() => handleItemClick('/lista')}>
                <h1 className="title text-center mt-4">Lista de lugares</h1>
                    <img className="card-img" src="./images/lista.png" alt="" />
                </div>

                <div className="card" onClick={() => handleItemClick('/pronostico')}>
                <h1 className="title text-center mt-4">Pronóstico</h1>
                    <img className="card-img" src="./images/pronostico.jpg" alt="" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-white">
                        
                    </div>
                </div>
                <div className="card" onClick={() => handleItemClick('/configuracion')}>
                <h1 className="title text-center mt-4">Configuración</h1>
                    <img className="card-img" src="./images/configuracion.png" alt="" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-white">

                    </div>
                </div>
            </div>
            <Pie />
        </div>
        </>
    );
};

export default Menu;
