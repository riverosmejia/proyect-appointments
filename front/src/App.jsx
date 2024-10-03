import MyNavbar from './Views/Navbar/MyNavBar.jsx';
import Home from './Views/components/home.jsx';
import Login from './Views/Login/Login.jsx';
import Register from './Views/Register/Register.jsx';
import MisTurnos from './Views/Turnos/MisTurnos.jsx';
import CrearTurno from './Views/Turnos/crearTurno.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux'; // Importa Provider
import store from './redux/store'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <StrictMode>
      <Provider store={store}> {/* Envuelve tu aplicación con el Provider */}
        <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mis-turnos" element={<MisTurnos />} />
            <Route path="/crear-turno" element={<CrearTurno/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

export default App;
