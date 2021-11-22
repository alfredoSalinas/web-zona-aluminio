import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import foto from "../images/aluminio.png"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 340,
    border:'1px solid  #757575',
    borderWidth:3,
    borderRadius:5,

    "&:hover": {
      border: '1px solid #65FC15',
      borderWidth:3,
      borderRadius:5,
    }
    
  },
  control: {
    padding: theme.spacing(2),
  },
  box:{
    display:'flex',
    width:'96%',
    height:30,
    backgroundColor: '#ffff',
    padding:'2%'
  },
  box1:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:'center',
    width:'92%',
    padding:'4%',
    backgroundColor: '#fff',
    color:'#212529',
    bottom:0
  }, 
  boton:{
    display:'flex',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#65FC15',
    backgrounClip: 'padding-box',
    cursor: 'pointer',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    borderRadius: 5,
    padding:'4% 2%',
    border:'1px solid #65FC15',
    marginTop: 10,
    marginBottom:10,

    "&:hover": {
        border: '1px solid #65FC15',
        backgroundColor: '#65FC15',
        color:'#1F1D1D'
      }
    },
    texto:{
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom:'2%'
    },
  mb4:{
    marginBottom:'4%'
  }
  
}));

const Cards = (props)=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        
        <Box>
          <img height='340px' width='100%' src={props.tarjeta.foto}/>
        </Box>
        <Box className={classes.box1}>
          <Typography className={classes.texto} align='center'>{props.tarjeta.nombre}</Typography>
          <Typography className={classes.mb4} align='center'>{props.tarjeta.descripcion}</Typography>
          <div className={classes.boton}>
            Añadir a Cotización
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default Cards