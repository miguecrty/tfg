// ConAuth.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuth = (Component) => {
    const Auth = (props) => {
        const router = useRouter();

        useEffect(() => {
            async function checkAuthAndRedirect() {
                const isAuthenticated = await checkAuthentication();
                if (!isAuthenticated && router) {
                    router.push('/');
                }
            }
            checkAuthAndRedirect();
        }, []);

        return <Component {...props} />;
    };

    return Auth;
};

const checkAuthentication = async () => {
    // Lógica para verificar la autenticación, por ejemplo, verificar las cookies
    const username = await Cookies.get('username'); // Debes definir esta función
    return !!username; // Devolver verdadero si hay un nombre de usuario en las cookies
};

export default withAuth;

