import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { login } from '../utils/auth';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData)
    console.log('Datos de inicio de sesión:', formData);
  };

  // Estilos
  const containerStyle = {
    width: '500px',
    height: '400px', // Hacer el contenedor cuadrado
    padding: '20px',
    borderRadius: '10px', // Bordes redondeados
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Centrar el contenido verticalmente
    boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.71)',
  };

  return (
    <Paper elevation={3} className="login-container" style={containerStyle}>
      <Typography variant="h5" gutterBottom>
        Inicio de Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de Usuario */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <Typography variant="subtitle1">Usuario</Typography>
          <TextField
            label="Usuario"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </div>

        {/* Campo de entrada de Contraseña */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <Typography variant="subtitle1">Contraseña</Typography>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </div>
        {/* Botón de inicio de sesión */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Iniciar sesión
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
