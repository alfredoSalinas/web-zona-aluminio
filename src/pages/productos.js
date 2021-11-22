import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";
import Grid from '@material-ui/core/Grid';
import Cards from '../components/cards'
import foto from '../images/aluminio.png'
import ProductSelect from "../components/productSelect";
import CommonStyles from "../common/styles/commonStyles";
import barra from "../images/barra8.png"
import { listaProductos } from "../services/api";
import ComponentCard from '../components/componentCard'


const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
        root: {
          flexGrow: 1,
        },
        control: {
          padding: theme.spacing(2),
        },
        box:{
            backgroundImage: `url(${barra})`
        }
  }));

const Productos = ()=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [productos, setProductos] = useState([])
    const [productosOrigen, setProductosOrigen] = useState([])
    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    useEffect(()=>{
        listaProductos((res)=>{
            setProductosOrigen(res)
        }) 
     },[])

    const buscarProducto = (valor) => {
        let r = new RegExp(valor, 'ig')
        const p = productosOrigen.filter((item) => {
          return item.grupo == valor
        })
        console.log('valor a buscar ',p)
        setProductos(p)
    }

    return(
        <Box className={classes.root}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Productos
                </Typography>
                
            </Box>
            <ProductSelect buscar={buscarProducto}/>    
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {productos.map((value, i) => (
                        <Grid key={i} item>
                            <Cards tarjeta={value} />
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Productos
