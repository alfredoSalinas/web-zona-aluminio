import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import {makeStyles, Select, MenuItem} from '@material-ui/core';
import archivo from "../../iconos/archivo.svg"
import CommonStyles from "../../common/styles/commonStyles";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { db } from "../../services/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

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

const schema = Yup.object().shape({
    codigo: Yup.string().required(),
    nombre: Yup.string().required(),
    descripcion: Yup.string().required(),
    precio: Yup.number().required(),
    //color: Yup.string().required(),
    unidad: Yup.string().required(),
    //grupo: Yup.string().required(),
    //subGrupo: Yup.string().required()
})

const FormularioProducto = (eventos)=>{
    const classes = useStyles()
    const [foto, setFoto] = useState()
    const [fotoURL, setFotoURL] = useState("")
    const [progreso, setProgreso] = useState(0)
    const defaultValues = {
        codigo: eventos.producto ? eventos.producto.codigo : '',
        nombre: eventos.producto ? eventos.producto.nombre : '',
        descripcion: eventos.producto ? eventos.producto.descripcion : '',
        precio: eventos.producto ? eventos.producto.precio : '',
        unidad: eventos.producto ? eventos.producto.unidad : '',
        color: eventos.producto ? eventos.producto.color : '',
        grupo: eventos.producto ? eventos.producto.grupo : '',
        subGrupo: eventos.producto ? eventos.producto.subGrupo : '',
        foto: eventos.producto ? eventos.producto.foto : '',
      }
    const { control, register, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    });

    useEffect(()=>{
        setFotoURL(defaultValues.foto)
    },[])

    const subirFoto = (e)=>{
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`/productos/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed', snapshot =>{
            let porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgreso(porcentage)
        }, error=>{
            console.log('Error al subir el archivo', error);
        }, ()=>{
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log(downloadURL)
                setFotoURL(downloadURL)
            });
        })
      }

    const createProducto = (data)=>{
        const producto = {
            ...data,
            foto: fotoURL
        }
        return db.collection('productos')
            .doc(producto.codigo)
            .set(producto);
    }

    return(
        
            
        <Paper className={classes.p2}>
            <Typography variant='h5' className={classes.title}>
                Producto
            </Typography>
            <form onSubmit={handleSubmit((d)=>createProducto(d))}>
            <label className={classes.label}>
                Nombre del Producto
            </label>
            <Controller
                render={({ field }) => <input className={classes.formControl} {...field} />}
                name="nombre"
                control={control}
                defaultValue={defaultValues.nombre}
            />
            <div >
                    <label className={classes.label}>
                        Foto
                    </label>
                    <button className={classes.formControlFile}>
                        <i ></i>
                            <img src={archivo} className={classes.imgArchivo} alt="" />Sube la foto del producto
                            {fotoURL}
                            <label for="btn-file"></label>
                        <input type="file" id="btn-file" 
                            onChange={(e)=>{
                                const file = e.target.files[0]
                                setFotoURL(file.name)
                                subirFoto(e)
                            }}
                        />
                    </button>  
            </div>
            <progress value={progreso}/>
            <label className={classes.label}>
                Descripción
            </label>
            <Controller
                render={({ field }) => <input className={classes.formControl} {...field} />}
                name="descripcion"
                control={control}
                defaultValue={defaultValues.descripcion}
            />
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Codigo
                    </label>
                    <Controller
                        render={({ field }) => <input className={classes.formControl} {...field} />}
                        name="codigo"
                        control={control}
                        defaultValue={defaultValues.codigo}
                    />
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Precio
                    </label>
                    <Controller
                        render={({ field }) => <input type='number' className={classes.formControl} {...field} />}
                        name="precio"
                        control={control}
                        defaultValue={defaultValues.precio}
                    />
                </div>   
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Color
                    </label>
                    <Controller
                        render={({ field }) => <Select
                                className={classes.formControl}
                                {...field}
                                >
                                <MenuItem value='Natural'>Natural</MenuItem>
                                <MenuItem value='Champagne'>Champagne</MenuItem>
                                <MenuItem value='Negro'>Negro</MenuItem>
                                <MenuItem value='Cromado'>Cromado</MenuItem>
                                <MenuItem value='Bronce'>Bronce</MenuItem>
                                <MenuItem value='Sin color'>Sin color</MenuItem>
                            </Select> }
                        name="color"
                        control={control}
                        defaultValue={defaultValues.color}
                    />
                       
                </div>
                <div style={{width:'50%'}}>
                <label className={classes.label}>
                        Unidad
                    </label>
                    <Controller
                        render={({ field }) => <input className={classes.formControl} {...field} />}
                        name="unidad"
                        control={control}
                        defaultValue={defaultValues.unidad}
                    />
                </div>   
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <div style={{marginRight:20, width:'50%'}}>
                    <label className={classes.label}>
                        Seleccionar Grupo
                    </label>
                    <Controller
                            render={({ field }) => <Select
                            className={classes.formControl}
                            {...field}
                            >
                            <MenuItem value='Perfiles de Aluminio'>Perfiles de Aluminio</MenuItem>
                            <MenuItem value='Quincallería'>Quincallería</MenuItem>
                            <MenuItem value='Jaladores'>Jaladores</MenuItem>
                            <MenuItem value='Accesorios Vidrio Templado'>Accesorios Vidrio Templado</MenuItem>
                            <MenuItem value='Barandas'>Barandas</MenuItem>
                            <MenuItem value='Placas'>Placas</MenuItem>
                        </Select> }
                        name="grupo"
                        control={control}
                        defaultValue={defaultValues.grupo}
                    />
                    
                </div>
                <div style={{width:'50%'}}>
                    <label className={classes.label}>
                        Seleccionar Sub Grupo
                    </label>
                    <Controller
                            render={({ field }) => <Select
                            className={classes.formControl}
                            {...field}
                            >
                            <MenuItem value='Línea 12'>Línea 12</MenuItem>
                            <MenuItem value='Línea 20'>Línea 20</MenuItem>
                            <MenuItem value='Línea 25'>Línea 25</MenuItem>
                            <MenuItem value='Línea 25'>Línea 25</MenuItem>
                            <MenuItem value='Línea 35'>Línea 35</MenuItem>
                            <MenuItem value='Línea 42'>Línea 42</MenuItem>
                            <MenuItem value='Línea 4000'>Línea 4000</MenuItem>
                            <MenuItem value='Tubos'>Tubos</MenuItem>
                            <MenuItem value='Vidrio Templado'>Vidrio Templado</MenuItem>
                            <MenuItem value='Kits'>Kits</MenuItem>
                            <MenuItem value='Herraje de Correr'>Herraje de Correr</MenuItem>
                            <MenuItem value='Herraje de Abatir'>Herraje de Abatir</MenuItem>
                            <MenuItem value='Herraje Basculante'>Herraje Basculante</MenuItem>
                            <MenuItem value='Herraje Paños Fijos'>Herraje Paños Fijos</MenuItem>
                            <MenuItem value='Herraje Minis'>Herraje Minis</MenuItem>
                        </Select> }
                        name="subGrupo"
                        control={control}
                        defaultValue={defaultValues.subGrupo}
                    />
                </div>   
            </Box>
            <Box display='flex' justifyContent='center' marginTop='20px'>
            <input  
            type='submit'
            className={classes.buttonPrimary} 
            style={{marginRight:'25%'}} 
            value='Aceptar'
          />
                <button className={classes.buttonSecondary} onClick={eventos.onClick}>Cancelar</button>
            </Box>
            </form>
        </Paper>
    )
}

export default FormularioProducto