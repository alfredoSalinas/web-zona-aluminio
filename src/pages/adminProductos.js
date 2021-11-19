import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, makeStyles, Typography, Container} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";
import CommonStyles from "../common/styles/commonStyles";
import { listaProductos } from "../services/api";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    
  }));

const AdminProductos = ()=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState(null)

    useEffect(()=>{
       listaProductos((res)=>{
           setProductos(res)
       }) 
    },[])

    const handleOpen = (item) =>{
        if(item==null){
            setProducto(null)
            setOpen(true)    
        }else{
            setProducto(item)
            setOpen(true);
        }
    }

    const handleClose =()=>{
        setOpen(false)
    }

    const ver =()=>{
        console.log(productos)
    }

    return(
        <Container className={classes.mt4}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Productos
                </Typography>
                <button onClick={ver}>ver</button>
                <button className={classes.buttonPrimary} onClick={()=>handleOpen(null)}>Añadir producto</button>
            </Box>
            <ModalProducto  open={open} producto={producto} handleClose={handleClose} />
            <TablaProductos productos={productos} onClick={handleOpen}/>
        </Container>
    )
}

export default AdminProductos