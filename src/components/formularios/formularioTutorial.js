import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg"

const useStyles= makeStyles((theme) => ({
    paper:{
        padding: '2%'
    },
    label:{
        textAlign: 'left',
        paddingBottom: '0.5em',
        paddingTop: '0.5em'
      },
      formControl :{
        width: '96%',
        padding: '2%',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#2A3B47',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #949ba0',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
      },
      containerBtnFile :{
        width: '100%',
        backgroundColor: '#fff',
        color:'#949ba0',
        border: '1px solid #949ba0',
        borderStyle: 'dashed',
        padding:'4% 2%',
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'ease-out 120ms background-color',
        marginBottom: '1em',

        "&:hover": {
            border: '1px solid #2A3B47',
            borderStyle: 'dashed',
            color:'#2A3B47'
          },
    },
    
    button: {
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'MyriadPro',
        color: '#1F1D1D',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: '#65FC15',
        border: '1px solid #65FC15',
        marginRight:'25%',

        "&:hover": {
            border: '1px solid #84ff42',
            backgroundColor: '#84ff42',
          },
      },

      
    button1:{
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'MyriadPro',
        color: '#1F1D1D',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: '#ee7171',
        border: '1px solid #ee7171',

        "&:hover": {
            border: '1px solid #fa7676',
            backgroundColor: '#fa7676',
          },
    },
    title:{
        textAlign: 'center',
        color: '#2A3B47',
        marginBottom:'20px'
      },
    imgArchivo:{
        width: 24,
        color: '#949ba0'
      }
}))

const FormularioTutorial = (eventos)=>{
    const classes = useStyles()
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



    return(
        <Paper className={classes.paper}>
            <Typography variant='h5' className={classes.title}>
                Tutorial
            </Typography>
            <label className={classes.label}>
                Titulo
            </label>
            <input type="text" className={classes.formControl} name="titulo"/>
            <label className={classes.label}>
                        Imagen
                    </label>
                    <button className={classes.containerBtnFile}>
                        <i ></i>
                            <img src={archivo} className={classes.imgArchivo} alt="" />Sube la portada del video
                        <input type="file" id="btn-file" />
                    </button>
            <label className={classes.label}>
                Enlace de Youtube
            </label>
            <input type="text" className={classes.formControl} name="precio"/>
            <Box display='flex' justifyContent='center' marginTop='20px'>
                <button className={classes.button}>Aceptar</button>
                <button className={classes.button1} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

export default FormularioTutorial