import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, makeStyles, Typography, Container} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    
  }));

const AdminProductos = ()=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }
    return(
        <Container className={classes.mt2}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Productos
                </Typography>
                <button className={classes.buttonPrimary} onClick={()=>handleOpen(null)}>Añadir producto</button>
            </Box>
            <ModalProducto  open={open} handleClose={handleClose} />
            <TablaProductos/>
        </Container>
    )
}

export default AdminProductos