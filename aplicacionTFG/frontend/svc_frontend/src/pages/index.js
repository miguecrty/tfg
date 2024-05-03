import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cabecera from '../components/cabecera';
import Pie from '../components/pie';
const Home = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === '/tiempo') {
            router.push('/tiempo');
        }
    }, []);
    
    return (    
         <div className="container">
            <Cabecera></Cabecera>
            <h1>Bienvenido a mi aplicación con Next.js</h1>
            <p>Esta es una aplicación simple con el frontend en Next.js y el backend en Node.js.</p>
            <Pie></Pie>
            </div>
            
    );
};

export default Home;
