import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Estilos para el Navbar
const navbarStyle = {
  backgroundColor: 'black', // Color de fondo oscuro
  position: 'fixed', // Fija el Navbar en la parte superior de la página
  top: 0, // Alinea el Navbar en la parte superior
  left: 0, // Alinea el Navbar desde el borde izquierdo
  right: 0, // Alinea el Navbar hasta el borde derecho
  display: 'flex',
  justifyContent: 'space-between', // Distribuye los elementos a los lados
};

// Estilos para el contenedor de botones
const buttonContainerStyle = {
  display: 'flex',
  gap: '10px', // Espacio entre los botones
  marginLeft: 'auto', // Alinea los botones a la derecha
};

function Navbar() {
  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Mi Aplicación
        </Typography>
        <div style={buttonContainerStyle}>
          <Button color="inherit">Iniciar sesión</Button>
          <Button color="inherit">Registrarse</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
