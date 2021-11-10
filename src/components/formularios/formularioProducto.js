import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';

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
        width: '96%',
        backgroundColor: '#fff',
        color:'#949ba0',
        border: '1px solid #949ba0',
        borderStyle: 'dashed',
        padding:' 12px 20px',
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'ease-out 120ms background-color',
        marginBottom: '1em'
    },
    button: {
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'MyriadPro',
        color: '#fff',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: '#32A2F1',
        border: '1px solid #32A2F1',
        marginRight:'25%'
      },
      

    button1:{
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'MyriadPro',
        color: '#fff',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: '#949ba0',
        border: '1px solid #949ba0'
    },
    title:{
        textAlign: 'center',
        color: '#2A3B47'
      },
    imgArchivo:{
        width: 24,
        color: '#949ba0'
    }
      
}))

const FormularioProducto = (eventos)=>{
    const classes = useStyles()
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



    return(
        <Paper className={classes.paper}>
            <Typography variant='h5' className={classes.title}>
                Producto
            </Typography>
            <label className={classes.label}>
                Nombre del Producto
            </label>
            <input type="text" className={classes.formControl} name="precio"/>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Codigo
                    </label>
                    <input type="text" className={classes.formControl} name="codigo"/>
                </div>
                <div className='flexV' style={{width:'50%'}}>
                    <label className={classes.label}>
                        Precio
                    </label>
                    <input type="text" className={classes.formControl} name="precio"/>
                </div>   
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label for="btn-file">
                        Foto
                    </label>
                    <i class="subtitle"></i>
                          
                    <input type="file" id="btn-file" className={classes.containerBtnFile} name="foto"/>
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Color
                    </label>
                    <input type="text" className={classes.formControl} name="color"/>
                </div>   
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Seleccionar Grupo
                    </label>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={age}
                        onChange={handleChange}
                        className={classes.formControl}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Seleccionar Sub Grupo
                    </label>
                    <input type="text" className={classes.formControl} name="subGrupo"/>
                </div>   
            </Box>
            <Box display='flex' justifyContent='center'>
                <button className={classes.button}>Aceptar</button>
                <button className={classes.button1} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

export default FormularioProducto