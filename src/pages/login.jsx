import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

  return (
    <form onSubmit={handleSubmit}>
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Iniciar sesión
      </Button>
    </form>
  );
}

export default Login;