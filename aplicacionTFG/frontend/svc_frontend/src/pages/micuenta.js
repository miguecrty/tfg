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
            <Head>
                <title>Menú principal</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
            </Head>
            <Cabecera mostrarBotonHome={true} />
            <div className="row text-center mt-4">
                <h1>Mi cuenta</h1>
            </div>
            <div className='row'>
                <div className='col mt-3 ml-3 mr-3'>
                <div className='card border-0 shadow'>
                    <div class="card-header text-center border-0 shadow" style={{background:'rgba(0,0,255,0.1)'}}>
                       <h4>Desmonitorizar lugares</h4>
                        </div>
                        <div className='card-body'>
                            holaa
                        </div>
                    </div>
                </div>
                <div className='col mt-3 ml-3 mr-3'>
                    <div className='card border-0 shadow'>
                    <div class="card-header text-center border-0 shadow" style={{background:'rgba(0,0,255,0.1)'}}>
                       <h4>Configuración de la cuenta</h4>
                        </div>
                    <div className='card-body'>
                        <div className='card'>
                            <h5 className='mt-3 text-center'>Cambiar contraseña</h5>
                            <div className='row'>
                            <div className='col mt-3 mb-3'>
                            <div class="input-group input-group-lg m-2 mr-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-lg">Antigua contraseña</span>
                            </div>
                            <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            </div>
                            <div className='col mt-3 mb-3'>
                            <div class="input-group input-group-lg m-2 mr-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text m-2" id="inputGroup-sizing-lg">Nueva contraseña</span>
                            </div>
                            <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            </div>
                            
                            </div>
                            <div class="d-flex justify-content-center">
                            <button type="button" className='btn btn-warning btn-block mb-2 shadow' style={{width:'25%'}}>Confirmar</button>
                            </div>
                            </div>
                            <h5>Cambiar contraseña</h5>
                            <h5>Borrar cuenta</h5>
                        </div>
                    </div>
                 </div>
            </div>
            <Pie />
        </>
    );
};

export default Menu;
