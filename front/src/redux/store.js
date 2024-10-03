// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import turnoReducer from './features/turnoSlice';

import authReducer from './features/authSlice'; // Importar el slice de autenticación

const store = configureStore({
  reducer: {
    turno: turnoReducer,
    auth: authReducer,

  },
});

export default store;
