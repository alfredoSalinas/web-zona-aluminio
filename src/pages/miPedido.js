import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaTutoriales from "../components/tablas/tablaTutoriales";
import ModalTutorial from "../components/modales/modalTutorial";
import TablaPedido from "../components/tablas/tablaPedido";

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

const MiPedido = ()=>{
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
                    Mi Pedido
                </Typography>
                <button className={classes.button} onClick={()=>handleOpen(null)}>Atras</button>
            </Box>
            <TablaPedido/>
            <Box display='flex' justifyContent='space-between' marginLeft='20%' marginRight='20%' marginTop='5%'>
                <button className={classes.button} onClick={()=>handleOpen(null)}>Enviar pedido</button>
                <button className={classes.button} onClick={()=>handleOpen(null)}>Imprimir pedido</button>
            </Box>
        </Container>
    )
}

export default MiPedido