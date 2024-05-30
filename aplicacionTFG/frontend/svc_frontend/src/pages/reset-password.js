import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

export default function ResetPassword() {
  const router = useRouter();
  const { token, usuario } = router.query;
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if(newPassword.length > 4){
      const datos = {
        token: token,
        usuario: usuario,
        password: newPassword
      };
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      const respuesta = await response.json();
      if (response.status === 200) {
        setMessage(respuesta.exito);
      }
      else{
        setMessageError(respuesta.error);
      }
    }
    else{
        setMessageError('La contraseña tiene que tener más de 4 caracteres');
    }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Restablecer la contraseña</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{minWidth:'300px'}}>
          <div className="card-body">
            <h1 className="card-title text-center">Restablecer la contraseña</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="newPassword"><strong>Nueva contraseña</strong></label>
                <div className="input-group">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    id="newPassword" 
                    className="form-control" 
                    placeholder="Nueva contraseña" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    required 
                  />
                  <div className="input-group-append">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>
              </div>
              {!message && (
                <button type="submit" className="btn btn-success btn-block">Restablecer</button>
              )}
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
            {messageError && <div className="alert alert-danger mt-3">{messageError}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
