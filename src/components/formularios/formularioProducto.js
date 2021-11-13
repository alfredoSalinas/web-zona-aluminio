import React, { useState } from "react";
import { Box, Button, Paper, Typography, Link } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg";



const useStyles= makeStyles((theme) => ({
    
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
          }
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

const FormularioProducto = (eventos)=>{
    const classes = useStyles()
    
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



    return(
        <Paper className={classes.mt6}>
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
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Precio
                    </label>
                    <input type="text" className={classes.formControl} name="precio"/>
                </div>   
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Foto
                    </label>
                    <button className={classes.containerBtnFile}>
                        <i ></i>
                            <img src={archivo} className={classes.imgArchivo} alt="" />Sube la foto del producto
                        <input type="file" id="btn-file" />
                    </button>
                    
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Color
                    </label>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={age}
                        onChange={handleChange}
                        className={classes.formControl}
                        >
                        <MenuItem value={10}>Natural</MenuItem>
                        <MenuItem value={20}>Champagne</MenuItem>
                        <MenuItem value={30}>Negro</MenuItem>
                        <MenuItem value={40}>Cromado</MenuItem>
                        <MenuItem value={50}>Bronce</MenuItem>
                        <MenuItem value={60}>Sin color</MenuItem>
                    </Select>
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
                        <MenuItem value={10}>Perfiles de Aluminio</MenuItem>
                        <MenuItem value={20}>Quincallería</MenuItem>
                        <MenuItem value={30}>Jaladores</MenuItem>
                        <MenuItem value={40}>Accesorios Vidrio Templado</MenuItem>
                        <MenuItem value={50}>Barandas</MenuItem>
                        <MenuItem value={60}>Placas</MenuItem>
                    </Select>
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Seleccionar Sub Grupo
                    </label>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={age}
                        onChange={handleChange}
                        className={classes.formControl}
                        >
                        <MenuItem value={10}>Línea 12</MenuItem>
                        <MenuItem value={20}>Línea 20</MenuItem>
                        <MenuItem value={30}>Línea 25</MenuItem>
                        <MenuItem value={40}>Línea 25</MenuItem>
                        <MenuItem value={50}>Línea 35</MenuItem>
                        <MenuItem value={60}>Línea 42</MenuItem>
                        <MenuItem value={70}>Línea 4000</MenuItem>
                        <MenuItem value={80}>Tubos</MenuItem>
                        <MenuItem value={90}>Vidrio Templado</MenuItem>
                        <MenuItem value={100}>Kits</MenuItem>
                        <MenuItem value={110}>Herraje de Correr</MenuItem>
                        <MenuItem value={120}>Herraje de Abatir</MenuItem>
                        <MenuItem value={130}>Herraje Basculante</MenuItem>
                        <MenuItem value={140}>Herraje Paños Fijos</MenuItem>
                        <MenuItem value={150}>Herraje Minis</MenuItem>
                    </Select>
                </div>   
            </Box>
            <Box display='flex' justifyContent='center' marginTop='20px'>
                <button className={classes.button} onClick={eventos.onClick}>Aceptar</button>
                <button className={classes.button1} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

export default FormularioProducto