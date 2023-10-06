import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: '70vh', minWidth:'100%', backgroundColor:'black'}}>
          <div>Contenido del encabezado</div>
          <img src="https://www.medicossalud.com/images/slides/doctora.webp" alt="" style={{width:'100px'}}/>
        </Grid>
      </Grid>
    </Box>

  );
}