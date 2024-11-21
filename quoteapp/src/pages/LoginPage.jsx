import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, selectAuthError, selectIsAuthenticated } from '../redux/auth/authSlice';

/*
function LoginPage() {
  const navigate = useNavigate();


    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);
  
    const handleLogin = () => {
      dispatch(loginRequest({ username: 'user', password: 'password' }));
      navigate('/notes');
    };
  
  
  

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
*/


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para autenticar al usuario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    dispatch(loginRequest({username:username, password:password}))
   
    
  };

  useEffect(() => {
    if(isLogin){
    navigate('/notes');// Despacha la acción para obtener las quotes
    }
}, [isLogin]);
  
  

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Ingresar</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #CCC',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#E97750',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginPage;

