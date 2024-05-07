import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import {server} from './_app';
import Cookies from 'js-cookie';
import SelectPersonalizado from '@/components/select';
import Map from '@/components/map';


const ListaLugares = () => {
    const username = Cookies.get('username');
    const center = { lat: 40.7128, lng: -74.006 };
    const zoom = 10;

    return (
        <div style={{ 
            width: '100vw',
            height: '100vh',
          }}>
            <Cabecera mostrarBotonHome={true}/> 
                    <SelectPersonalizado/>

            <Pie/>
        </div>
        
    ); 
};

export default ListaLugares;
