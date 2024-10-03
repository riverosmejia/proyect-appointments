import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Para acceder al estado del usuario
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario

const CrearTurno = () => {
  const [turno, setTurno] = useState({ date: '', time: '', Asunto: '' });
  const user = useSelector((state) => state.auth.user); // Obtener el usuario del estado de Redux
  const userId = user?.id; // Obtener el userId del objeto usuario
  const navigate = useNavigate(); // Hook para la navegación

  // Verifica si el usuario está logueado
  useEffect(() => {
    if (!userId) {
      alert('No estás logueado. Debes iniciar sesión para crear un turno.'); // Mensaje de alerta
      navigate('/login'); // Redirigir al login si no hay userId
    }
  }, [userId, navigate]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setTurno({ ...turno, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si el usuario está logueado (en caso de que el efecto se ejecute después del envío)
    if (!userId) {
      alert('No estás logueado. Debes iniciar sesión para crear un turno.'); // Mensaje de alerta
      navigate('/login'); // Redirigir al login si no hay userId
      return;
    }

    try {
      // Realiza la solicitud para crear el turno
      const response = await axios.post(`http://localhost:3000/appointments/schedule`, {
        userId,
        date: turno.date,
        time: turno.time,
        Asunto: turno.Asunto
      });
      console.log('Turno creado:', response.data);
      alert('Turno creado exitosamente.');
      navigate('/mis-turnos'); // Redirigir a la página de mis turnos
    } catch (error) {
      console.error('Error creando el turno:', error);
      alert('Error al crear el turno. Verifica los datos e inténtalo de nuevo.'); // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Crear Turno</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={turno.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={turno.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Asunto"
          placeholder="Asunto"
          value={turno.Asunto}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
