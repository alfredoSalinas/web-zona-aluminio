import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, Button, Container, makeStyles, useMediaQuery, useTheme} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";
import Grid from '@material-ui/core/Grid';
import Cards from '../components/cards'
import foto from '../images/aluminio.png'
import ProductSelect from "../components/productSelect";
import CommonStyles from "../common/styles/commonStyles";
import barra from "../images/barra8.png"
import { listaProductos } from "../services/api";
import MenuProductos from "../components/menus/menuProductos";
import ComponentCard from '../components/componentCard'
import DrawerProductos from "../components/menus/drawerProductos";


const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
        root: {
          flexGrow: 1,
          marginTop: 70
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
    const [openProductos, setOpenProductos]= useState(false)
    const [productos, setProductos] = useState([])
    const [productosOrigen, setProductosOrigen] = useState([])
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

    const handleOpenProductos =()=> {
        setOpenProductos(true)
    }

    const handleCloseProductos =()=> {
        setOpenProductos(false)
    }
    return(
        <Box className={classes.root}>
            <Box>
                { isMobile ? 
                    <>
                    <Button onClick={handleOpenProductos} className={classes.buttonPrimary}>productos</Button>
                <DrawerProductos open={openProductos} onClose={handleCloseProductos}/>
            </>
            :
            <MenuProductos/>
            }
            </Box>   
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
