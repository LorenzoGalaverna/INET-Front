import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import Navbar from '../components/navbar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const buttonStyle = {
  width: '100%', 
  marginTop:'30px'
};

export default function Main() {
  return (
    <>
    <Navbar/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={8} sx={{ height: '70vh', minWidth: '100%', backgroundColor: '#ededed', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>
            <h1>HEADER CON IMÁGENES RE FACHERAS</h1>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{marginTop:'40px'}}>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <div>LOGIN</div>
            <Button style={buttonStyle} href='/login'>ENTRAR</Button>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <div>GRAFICOS</div>
            <Button style={buttonStyle} href='/home'>ENTRAR</Button>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <div>Tablas o gráficos</div>
            <Button style={buttonStyle} href='/graph'>ENTRAR</Button>
          </Item>
        </Grid>
        <Container maxWidth="sm" sx={{textAlign:'center'}}>
          <h1 style={{marginTop:'60px', marginBottom:'40px'}}>Misión del Hospital con Sistema de Alarma Azul</h1>
          <p style={{textAlign:'justify'}}>En nuestro hospital, nuestra misión es proporcionar atención médica de alta calidad y compasiva a nuestros pacientes, con un enfoque especial en la respuesta eficiente a situaciones de emergencia. Nuestro sistema de alarma azul es una parte esencial de nuestra infraestructura para garantizar la seguridad y el bienestar de nuestros pacientes y personal médico. </p>

        </Container>

      </Grid>
    </Box>
    </navbar>
    
  );
}
