import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import foto from "../../images/imagenTutorial.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
  },
  paper: {
    width: 240,
    border:'1px solid  #757575',
    borderWidth:3,
    borderRadius:5,
    marginRight:20,

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
    justifyContent: 'center',
    alignContent:'center',
    textAlign:'center',
    width:'96%',
    backgroundColor: '#fff',
    color:'#212529',
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
  link:{
    fontSize: '1.1em',
    color: '#fff',
    textDecoration: 'underline',
    
    "&:hover": {
        cursor: 'pointer',
        color: '#65FC15'
      },
  },
  texto:{
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom:'2%'
    },
  
}));

const CardTutorial = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
            <Typography className={classes.texto} align='center'>COMO HACER UNA VENTANA CORREDIZA</Typography>
        </Box>
        <Box>
          <img height='200px' width='100%' src={foto}/>
        </Box>
        <Box className={classes.box1}>
            <div className={classes.boton}>
                Ver Tutorial
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default CardTutorial