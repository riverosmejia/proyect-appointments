import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link
import styles from "./navbar.module.css";

const MyNavbar = () => {
  return (
    <header className={styles.naver}>
      <Navbar expand="lg" className={`fixed-top ${styles.bg}`}>
        
        <Navbar.Brand as={Link} to="/mis-turnos" className={styles.winbutton}> {/* Usa Link aquí */}
          <span>Mis Turnos</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" className={styles.text}> {/* Usa Link aquí también */}
              <span>Login</span>
            </Nav.Link>
            
            <Nav.Link as={Link} to="/register" className={styles.text}> {/* Y aquí también */}
              <span>Register</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/crear-Turno" className={styles.text}>
              <span>Crear Turno</span>
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
