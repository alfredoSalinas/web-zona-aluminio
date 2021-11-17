import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg"
import CommonStyles from "../../common/styles/commonStyles";
import CommonProperties from "../../common/styles/commonProperties";

const useStyles= makeStyles((theme) => ({
    ...CommonStyles,
    button: {
        ...CommonStyles.buttonPrimary,
        marginRight:'25%',
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
        <Paper className={classes.p2}>
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
                    <button className={classes.formControlFile}>
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
                <button className={classes.buttonSecondary} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

export default FormularioTutorial