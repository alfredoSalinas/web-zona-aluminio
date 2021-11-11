import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import foto from "../images/aluminio.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 240,
    border:'1px solid #65FC15',
    marginRight:20
  },
  control: {
    padding: theme.spacing(2),
  },
  box:{
    display:'flex',
    justifyContent: 'center',
    alignContent:'center',
    width:'96%',
    height:30,
    backgroundColor: '#1F1D1D',
    color:'#fff',
    padding:'2%'
  },
  box1:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width:'92%',
    padding:'4%',
    backgroundColor: '#1F1D1D',
    color:'#949ba0',
    bottom:0
  }, 
  boton:{
    display:'flex',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#fff',
    backgrounClip: 'padding-box',
    cursor: 'pointer',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    borderRadius: 5,
    padding:'2%',
    border:'1px solid #65FC15',
    marginTop: 10,

    "&:hover": {
        border: '1px solid #65FC15',
        backgroundColor: '#65FC15',
        color:'#1F1D1D'
      }
    },
  
}));

const Cards = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          <div>JAMBA</div>
        </Box>
        <Box>
          <img height='200px' width='100%' src={foto}/>
        </Box>
        <Box className={classes.box1}>
          <Typography>Usado para ventanas dobles corredizas.</Typography>
          <div className={classes.boton}>
            Cotizar
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default Cards