import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Estilos para el Navbar
const navbarStyle = {
  backgroundColor: 'white', // Fondo blanco
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

// Estilos para el título
const titleStyle = {
  color: 'black', // Color de texto negro
};

// Estilos para los botones
const buttonStyle = {
  color: 'black', // Color de texto negro
};

function Navbar() {
  return (
    <AppBar position="static" style={navbarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" style={titleStyle}>
          Mi Aplicación
        </Typography>
        <div style={buttonContainerStyle}>
          <Button color="inherit" style={buttonStyle}>
            Iniciar sesión
          </Button>
          <Button color="inherit" style={buttonStyle}>
            Registrarse
          </Button>
        </div>
      </Toolbar>
      <Box sx={{ bgcolor: 'navy', height: '2px', width: '100%' }}></Box>
    </AppBar>
  );
}

export default Navbar;
