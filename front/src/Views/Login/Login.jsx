// Views/Login/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/authSlice'; // Importar la acción de login
import axios from 'axios'; // Importar Axios
import styles from '../form.module.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigates

const Login = () => {
  
  const [credentials, setCredentials] = useState({ 
  
    username: '', 
    password: ''
  
  });
  
  
  const [error, setError] = useState(null); // Estado para manejar errores
  const dispatch = useDispatch();
  const navigate = useNavigate(); 



  const handleChange = (e) => {

      // Actualizar el estado de credentials sin usar el operador de propagación  
      
      if (e.target.name === 'username') {
      
        setCredentials((prev) => {
          return { username: e.target.value, password: prev.password }; // Asignar username y mantener password
        });
      
      } else if (e.target.name === 'password') {
      
        setCredentials((prev) => {
          return { username: prev.username, password: e.target.value }; // Asignar password y mantener username
        });
      
      }
    
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      const response = await axios.post('http://localhost:3000/user/login', credentials); // Cambia la URL a tu endpoint real
      const user = response.data; // Supone que el servidor responde con la información del usuario
  
      console.log(user);
  
      dispatch(login(user)); // Despachar la acción de login
  
      console.log("logueado")
  
      navigate('/mis-turnos');
      setError(null); // Limpiar el error si la autenticación es exitosa
  
  
    } catch (err) {
      setError('Error de autenticación. Verifica tus credenciales.'); // Manejar el error
      console.error(err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Iniciar Sesión</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar el error si existe */}
      <form onSubmit={handleSubmit} >
        <input
          className={styles.formInput}
          type="text" // Cambia de email a texto para username
          name="username"
          placeholder="Correo Electrónico"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          className={styles.formInput}
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.formInput}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
