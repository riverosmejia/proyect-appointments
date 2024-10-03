import React from 'react';
import './turnos.css';

const Turno = ({ id, date, time, status, Asunto, onCancel }) => {

  const handleCancel = () => {
    const confirmed = window.confirm("¿Estás seguro de que deseas cancelar este turno?");
    if (confirmed) {
      onCancel(id); // Llama a la función de cancelación con el ID
    }
  };

  return (
    <div className={`card ${status === 'cancelled' ? 'cancelled' : ''}`}>
      <div>
        <h3>Turno #{id}</h3>
        <p>Fecha: {date}</p>
      </div>
      <div>
        <p>Hora: {time}</p>
        <p>Estado: {status}</p>
        <p>Asunto: {Asunto}</p>
      </div>
      {status !== 'cancelled' && <button onClick={handleCancel}>Cancelar</button>}
    </div>
  );
};

export default Turno;
