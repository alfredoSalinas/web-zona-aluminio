import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";


const Productos = ()=>{
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }
    const classes={
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
          title:{
            textAlign: 'start',
            color: '#2A3B47'
          }
          
    }
    return(
        <Box marginTop='5%'>
            <Box display='flex' justifyContent='space-between' marginBottom='3%' >
                <Typography variant='h5' style={classes.title}>
                    Productos
                </Typography>
                <button style={classes.button} onClick={()=>handleOpen(null)}>Añadir producto</button>
            </Box>
            <ModalProducto  open={open} handleClose={handleClose} />
        </Box>
    )
}

export default Productos