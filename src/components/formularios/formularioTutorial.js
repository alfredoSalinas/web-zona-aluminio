import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg"
import CommonStyles from "../../common/styles/commonStyles";
import CommonProperties from "../../common/styles/commonProperties";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { db } from "../../services/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const schema = Yup.object().shape({
    titulo: Yup.string().required(),
    enlace: Yup.string().required()
})

const FormularioTutorial = (eventos)=>{
    const classes = useStyles()
    const defaultValues = {
        titulo: '',
        enlace: ''
    }
    const { control, register, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    });

    const ver =(data)=>{
        console.log(data)
    }

    return(
        <Paper className={classes.p2}>
            <Typography variant='h5' className={classes.title}>
                Tutorial
            </Typography>
            <label className={classes.label}>
                Titulo
            </label>
            <Controller
                render={({ field }) => <input className={classes.formControl} {...field} />}
                name="titulo"
                control={control}
                defaultValue={defaultValues.titulo}
            />
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
            <Controller
                render={({ field }) => <input className={classes.formControl} {...field} />}
                name="enlace"
                control={control}
                defaultValue={defaultValues.enlace}
            />
            <Box display='flex' justifyContent='center' marginTop='20px'>
                <button className={classes.button}
                    onClick={handleSubmit(ver)}
                >
                    Aceptar
                </button>
                <button className={classes.buttonSecondary} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

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

export default FormularioTutorial