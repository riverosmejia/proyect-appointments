import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null, // Almacena los datos del usuario
        isAuthenticated: false, // Indica si el usuario está autenticado
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload; // Almacena el objeto del usuario
            state.isAuthenticated = true; // Marca como autenticado
        },
        logout: (state) => {
            state.user = null; // Limpia los datos del usuario
            state.isAuthenticated = false; // Marca como no autenticado
        },
    },
});

// Exportar acciones
export const { login, logout } = authSlice.actions;

// Exportar el reducer
export default authSlice.reducer;
