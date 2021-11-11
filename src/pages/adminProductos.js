import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, makeStyles, Typography, Container} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";

const useStyles = makeStyles((theme) => ({
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

        "&:hover": {
            border: '1px solid #84ff42',
            backgroundColor: '#84ff42',
          },
      },

      title:{
        textAlign: 'start',
        color: '#2A3B47'
      },
      container:{
        marginTop:'2%'
      },
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
        <Container className={classes.container}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title}>
                    Productos
                </Typography>
                <button className={classes.button} onClick={()=>handleOpen(null)}>Añadir producto</button>
            </Box>
            <ModalProducto  open={open} handleClose={handleClose} />
            <TablaProductos/>
        </Container>
    )
}

export default AdminProductos