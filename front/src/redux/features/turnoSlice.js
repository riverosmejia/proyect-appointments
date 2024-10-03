// redux/slices/turnoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const turnoSlice = createSlice({
  name: 'turno',
  initialState: {
    misTurnos: [],
  },
  reducers: {
    agregarTurno(state, action) {
      state.misTurnos.push(action.payload);
    },
    eliminarTurno(state, action) {
      state.misTurnos = state.misTurnos.filter(turno => turno.id !== action.payload);
    },
  },
});

// Exportar acciones
export const { agregarTurno, eliminarTurno } = turnoSlice.actions;

// Exportar el reducer
export default turnoSlice.reducer;
