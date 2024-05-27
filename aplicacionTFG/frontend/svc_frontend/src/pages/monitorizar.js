import React, { useState, useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
import SelectPersonalizado from '@/components/select';
import Head from 'next/head';

const ListaLugares = () => {   
    return (
        <>
        <Head>
                <title>Lugares</title>
                <link rel="icon" href="./images/map.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            </Head>
      <Cabecera mostrarBotonHome={true} mostrarUser={true} /> 
        <SelectPersonalizado/>
            <Pie/>
        </>
        
    ); 
};

export default ListaLugares;
