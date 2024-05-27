import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from 'js-cookie';

const Menu = () => {
    const [lista, setLista] = useState([]);
    const [confirmar, setConfirmar] = useState(null);
    const [error, setError] = useState(null);
    const [exito, setExito] = useState(null);
    const [exitoContra, setExitoContra] = useState(null);
    const [errorContra, setErrorContra] = useState(null);
    const [desmonitorizar, setDesmonitorizar] = useState(null);
    const [inputConfirmar, setInputConfirmar] = useState('');
    const [antiguaPassword, setAntiguaPassword] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');
    const router = useRouter();
    const username = Cookies.get('username');
    const [selected, setSelected] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelected(prevSelected => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter(item => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const handleConfirmClick = async () => {
        const selectedLugares = lista.filter((_, index) => selected.includes(index));
        try {
          const response = await fetch('/api/desmonitorizar', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({"lugares":selectedLugares, "usuario":username})
          });
  
          if (response.status == 200) {
            obtenerLista(username);
            setTimeout(() => {
              setDesmonitorizar(false);
           }, 5000);
           setDesmonitorizar(true);
          }
      } catch (error) {
          console.error(error);
      }
    
    };

    async function borraCuenta (usuario) {
      try {
          const response = await fetch('/api/borracuenta', {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({"usuario":usuario})
          });
  
          if (response.status == 200) {
             const responseData = await response.json();
             setExito(responseData.message);
             Cookies.remove('isLoggedIn');
             setTimeout(() => {
                router.push('/');
             }, 3000);
          }
      } catch (error) {
          console.error(error);
      }
    }
    
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

    const handleConfirmacion = async () => {
      setError(false);
      setExito(false);
      if(confirmar != null) {
          if(inputConfirmar === 'confirmar') {
              borraCuenta(username);
          } else {
              setInputConfirmar('');
              setConfirmar(null);
              setError(true);
          }
      } else {
        setConfirmar(`Si estas seguro que quieres borrar la cuenta escribe: 'confirmar'`);
      }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          setError(false);
          setExito(false);
          if(inputConfirmar === 'confirmar') {
              borraCuenta(username);
              setExito(true);
          } else {
              setInputConfirmar('');
              setConfirmar(null);
              setError(true);
          }
        }
    };

    const handlePasswordChange = async () => {
        console.log('Antigua contraseña:', antiguaPassword);
        console.log('Nueva contraseña:', nuevaPassword);
        if ( nuevaPassword.length < 4)
          {
            setErrorContra('La nueva contraseña tiene que tener más de 4 carácteres');
          }
        else{

          try {
            const response = await fetch('/api/cambiarpassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"usuario":username,"antigua":antiguaPassword,"nueva":nuevaPassword})
            });
            const responseData = await response.json();
            if (response.status == 200) {
              setTimeout(() => {
                setExitoContra('');
             }, 5000);
             setExitoContra(responseData.message);
            
            }
            else{
              setErrorContra(responseData.message);
            }
        } catch (error) {
            console.error(error);
        }





        }
    };

    return (
        <>
            <Head>
                <title>Menú principal</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarUser={true} />
            <div className="row mr-0 text-center mt-4">
                <h1 className='display-2 text-center mt-2'>Mi cuenta</h1>
            </div>
            <div className='row mr-0'>
                <div className='col mt-3 ml-3 mr-3'>
                    <div className='card border-0 shadow'>
                        <div className="card-header text-center border-0 shadow" style={{ background: 'rgba(0,0,255,0.1)' }}>
                            <h2>Desmonitorizar lugares</h2>
                        </div>
                        <div className='card-body'>
                            <div className="row-md-4 mt-3 ml-3">
                                <div className="card border-0">
                                    <div className="card-body">
                                        {lista.length ? (
                                            <>
                                                <h5 className='mt-2 text-center mb-3'>Selecciona los lugares para desmonitorizar...</h5>
                                                <div className="list-group mt-5" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                                                    {lista.map((opcion, index) => (
                                                        <div className="row ml-4 mr-0 border-0 shadow mb-3" key={index}>
                                                            <div className=" mt-2 d-flex align-items-center justify-content-center position-relative">
                                                                <input
                                                                    className="position-absolute"
                                                                    type="checkbox"
                                                                    value=""
                                                                    id="defaultCheck1"
                                                                    onChange={() => handleCheckboxChange(index)}
                                                                    style={{ left: "10px", height: '20px', width: '20px' }}
                                                                />
                                                                <p className="mb-0 flex-grow-1 text-center" style={{ fontSize: '1.5rem' }}>{opcion}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            </>
                                        ) : (
                                            <p className='text-center'>No hay ningun lugar monitorizándose</p>
                                        )}
                                        {desmonitorizar && (
                                        <strong><p className='text-center text-success'>Lugares desmonitorizados con éxito</p></strong>
                                        )
                                        }
                                        <div className="d-flex justify-content-center">
                                            <button type="button" className='btn btn-secondary btn-block mb-2 shadow mt-4' style={{ width: '25%' }} onClick={handleConfirmClick} >Confirmar</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col mt-3 ml-3 mr-3'>
                    <div className='card border-0 shadow'>
                        <div className="card-header text-center border-0 shadow" style={{ background: 'rgba(0,0,255,0.1)' }}>
                            <h2>Configuración de la cuenta</h2>
                        </div>
                        <div className='card-body'>
                            <div className='card mt-4 border-0 shadow-lg'>
                                <h5 className='mt-3 text-center'>Cambiar contraseña</h5>
                                <div className='row'>
                                    <div className='col mt-3 mb-3 ml-3 '>
                                        <div className="input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-lg">Antigua contraseña</span>
                                            </div>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                aria-label="Large" 
                                                aria-describedby="inputGroup-sizing-sm" 
                                                value={antiguaPassword}
                                                onChange={(e) => setAntiguaPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col mt-3 mb-3 mr-3'>
                                        <div className="input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-lg">Nueva contraseña</span>
                                            </div>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                aria-label="Large" 
                                                aria-describedby="inputGroup-sizing-sm" 
                                                value={nuevaPassword}
                                                onChange={(e) => setNuevaPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {exitoContra && (
                                  <strong><p className='text-success text-center'>{exitoContra}</p></strong>
                                )}
                                {errorContra && (
                                  <strong><p className='text-danger text-center'>{errorContra}</p></strong>
                                )}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button 
                                        type="button" 
                                        className='btn btn-warning btn-block mb-2 shadow' 
                                        style={{ width: '25%' }} 
                                        onClick={handlePasswordChange}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>

                            <div className='card mt-5 mb-4 border-0 shadow-lg'>
                                <h5 className='mt-3 mb-3 text-center'>Borrar cuenta</h5>
                                <div className="d-flex justify-content-center">
                                    <button 
                                        type="button" 
                                        className='btn btn-danger btn-block mb-2 shadow' 
                                        style={{ width: '25%' }} 
                                        onClick={handleConfirmacion}
                                    >
                                        Confirmar
                                    </button>
                                </div>

                                {confirmar && (
                                   <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-3">
                                        <h5>{confirmar}</h5>
                                        <input
                                            className='text-center'
                                            type="text"
                                            placeholder="confirmar"
                                            value={inputConfirmar}
                                            onChange={(e) => setInputConfirmar(e.target.value)}
                                            onKeyDown={handleKeyPress}
                                        />
                                    </div>
                                )}
                                {error && (
                                  <strong><p className='text-danger text-center'>La cuenta no se borrará</p></strong>
                                )}
                                {exito && (
                                  <strong><p className='text-success text-center'>{exito}</p></strong>
                                )}
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
