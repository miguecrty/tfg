import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';

const Menu = () => {
    const [lista, setLista] = useState([]);
    const router = useRouter();
    const username = Cookies.get('username');

    const obtenerLista = async (usuario) => {
        let lista = {};
        try {
          const response = await fetch('/api/obtenerlista?usuario=' + usuario, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
    
          if (response.ok) {
            lista = await response.json();
            console.log(lista);
            const lugares = [];
            for (let lugar in lista) {
              lugares.push(lugar);
            }
            setLista(lugares);
          } else {
            console.error('Error al obtener la lista');
          }
        } catch (error) {
          console.error('Error al obtener la lista:', error);
        }
      };


      useEffect(() => {
        obtenerLista(username);
      }, []);

    return (
        <>
            <Head>
                <title>Menú principal</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
            </Head>
            <Cabecera mostrarBotonHome={true} />
            <div className="row mr-0 text-center mt-4">
            <h1 className='display-2 text-center mt-2'>Mi cuenta</h1>
            </div>
            <div className='row mr-0'>
                <div className='col mt-3 ml-3 mr-3'>
                <div className='card border-0 shadow'>
                    <div class="card-header text-center border-0 shadow" style={{background:'rgba(0,0,255,0.1)'}}>
                       <h2>Desmonitorizar lugares</h2>
                        </div>
                        <div className='card-body'>
                        <div className="row-md-4 mt-3 ml-3">
      
                        <div className="card border-0">
                            <div className="card-body">
                            
                        {lista.length ? (
                            <>
                            <h5 className='mt-2 text-center mb-3'>Selecciona los lugares para desmonitorizar...</h5>
                             <div className="list-group mt-5" style={{maxHeight: '180px', overflowY: 'auto' }}>
                             {lista.map((opcion, index) => (
                               <div className="row ml-4 mr-0 border-0 shadow mb-3" key={index}>
                                 <div className=" mt-2 d-flex align-items-center justify-content-center position-relative">
                                   <input 
                                     className="position-absolute" 
                                     type="checkbox" 
                                     value="" 
                                     id="defaultCheck1" 
                                     style={{ left: "10px", height:'20px', width:'20px' }} // Ajusta la distancia del checkbox al borde izquierdo
                                   />
                                   <p className="mb-0 flex-grow-1 text-center" style={{fontSize:'1.5rem'}}>{opcion}</p>
                                 </div>
                               </div>
                               
                             ))}
                           </div>
                           
                           </>
                             
                            ) : (
                            <p>No hay ningun lugar monitorizándose</p>
                            )}
                         <div class="d-flex justify-content-center">
                            <button type="button" className='btn btn-secondary btn-block mb-2 shadow mt-4' style={{width:'25%'}}>Confirmar</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col mt-3 ml-3 mr-3'>
                    <div className='card border-0 shadow'>
                    <div class="card-header text-center border-0 shadow" style={{background:'rgba(0,0,255,0.1)'}}>
                       <h2>Configuración de la cuenta</h2>
                        </div>
                    <div className='card-body'>
                        <div className='card mt-4 border-0 shadow-lg'>
                            <h5 className='mt-3 text-center'>Cambiar contraseña</h5>
                            <div className='row'>
                            <div className='col mt-3 mb-3 ml-3 '>
                            <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-lg">Antigua contraseña</span>
                            </div>
                            <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            </div>
                            <div className='col mt-3 mb-3 mr-3'>
                            <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-lg">Nueva contraseña</span>
                            </div>
                            <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            </div>
                            
                            </div>
                            <div class="d-flex justify-content-center">
                            <button type="button" className='btn btn-warning btn-block mb-2 shadow' style={{width:'25%'}}>Confirmar</button>
                            </div>
                            </div>

                            <div className='card mt-5 mb-4 border-0 shadow-lg'>
                            <h5 className='mt-3 mb-3 text-center'>Borrar cuenta</h5>
                            <div class="d-flex justify-content-center">
                            <button type="button" className='btn btn-danger btn-block mb-2 shadow' style={{width:'25%'}}>Confirmar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <Pie />
        </>
    );
};

export default Menu;
