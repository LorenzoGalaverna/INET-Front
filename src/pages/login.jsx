import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
    // Aquí puedes agregar tu lógica para manejar el inicio de sesión, por ejemplo, enviar los datos al servidor.
    console.log('Datos de inicio de sesión:', formData);
  };

  // Estilos
  const containerStyle = {
    width: '800px',
    padding: '20px',
    borderRadius: '48px 47px 47px 47px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.71)',
  };

  return (
    <Paper elevation={3} className="login-container" style={containerStyle}>
      <Typography variant="h5" gutterBottom>
        Inicio de Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada */}
        <TextField
          label="Usuario"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
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