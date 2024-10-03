import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Turno from './Turno';
import styles from '../form.module.css'

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const userId = user?.id;

  useEffect(() => {
    if (!userId) {
      alert('No estás logueado.');
      navigate('/login');
    } else {
      fetchTurnos();
    }
  }, [userId, navigate]);

  const fetchTurnos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/appointments/user/${userId}`);
      setTurnos(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleCancel = async (id) => {
    console.log('Intentando cancelar el turno con ID:', id); // Debugging
    try {
      const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      console.log('Respuesta de la API:', response.data); // Debugging
      fetchTurnos(); // Refresca la lista de turnos después de la cancelación
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  return (
    <div className='formContainer'>
      <h2>Mis Turnos</h2>
      <div>
        {turnos.length > 0 ? (
          turnos.map(turno => (
            <Turno
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
              Asunto={turno.Asunto}
              onCancel={handleCancel} // Pasa la función handleCancel
            />
          ))
        ) : (
          <p>No tienes turnos agendados.</p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;
