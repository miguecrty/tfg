import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React from 'react';
import { useRouter } from 'next/router';

const Menu = () => {
    
    const router = useRouter();
    const handleItemClick = (url) => {
        router.push(url);
    };
    return (
        <div>
            <Cabecera showHomeButton={false}/>
            <div className="menu">
                <h1>Menú principal</h1>
                <ul className="menu-list">
                    <li className="menu-item-container" onClick={() => handleItemClick('/tiempo')}>
                        <span className="menu-item">Seleccionar lugar para monitorizar</span>
                        <img src="./images/map.png" alt="Imagen 1" /> 
                    </li>
                    <li className="menu-item-container" onClick={() => handleItemClick('/lista')}>
                    <span className="menu-item">Lista de lugares monitorizados</span> 
                        <img src="./images/lista.png" alt="Imagen 2" /> 
                    </li>
                    <li className="menu-item-container" onClick={() => handleItemClick('/tiempo')}>
                    <span className="menu-item">Elemento de menú 3</span> 
                        <img src="./images/cargando.gif" alt="Imagen 3" /> 
                    </li>
                </ul>
            </div>
            <Pie />
        </div>
    );
};

export default Menu;
