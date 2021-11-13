import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg"
import CommonStyles from "../../common/styles/commonStyles";
import CommonProperties from "../../common/styles/commonProperties";

const useStyles= makeStyles((theme) => ({
    ...CommonStyles,
      button1:{
        ...CommonProperties.button,
        ...CommonProperties.borderRadius, 
        padding: '0.7rem 1.5rem 0.7rem 1.5rem',
        backgroundColor: '#ee7171',
        border: '1px solid #ee7171',

        "&:hover": {
            border: '1px solid #fa7676',
            backgroundColor: '#fa7676',
          }
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
        <Paper className={classes.p2}>
            <Typography variant='h5' className={classes.title}>
                Producto
            </Typography>
            <label className={classes.label}>
                Nombre del Producto
            </label>
            <input type="text" className={classes.formControl} name="precio"/>
            <div >
                    <label className={classes.label}>
                        Foto
                    </label>
                    <button className={classes.formControlFile}>
                        <i ></i>
                            <img src={archivo} className={classes.imgArchivo} alt="" />Sube la foto del producto
                        <input type="file" id="btn-file" />
                    </button>
                    
            </div>
            <label className={classes.label}>
                Descripción
            </label>
            <input type="text" className={classes.formControl} name="descripcion"/>
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
                <div style={{width:'50%'}}>
                <label className={classes.label}>
                        Unidad
                    </label>
                    <input type="text" className={classes.formControl} name="unidad"/>
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
                <button className={classes.buttonAceptar}>Aceptar</button>
                <button className={classes.button1} onClick={eventos.onClick}>Cancelar</button>
            </Box>
        </Paper>
    )
}

export default FormularioProducto