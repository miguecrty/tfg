import React, { useState, useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SearchBox from '../components/searchbox';
import { server } from './_app';
import Cookies from 'js-cookie';
import SelectPersonalizado from '@/components/select';

const ListaLugares = () => {   
    return (
        <div>
      <Cabecera mostrarBotonHome={true}/> 
        <SelectPersonalizado/>
            <Pie/>
        </div>
        
    ); 
};

export default ListaLugares;
