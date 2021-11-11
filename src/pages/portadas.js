import React, { useState, useEffect } from "react";
import {Box, makeStyles, Typography} from '@material-ui/core';
import TablaTutoriales from "../components/tablas/tablaTutoriales";
import ModalTutorial from "../components/modales/modalTutorial";
import TablaPortada from "../components/tablas/tablaPortada";

const useStyles = makeStyles((theme) => ({
    button: {
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'MyriadPro',
        color: '#2A3B47',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: '#65FC15',
        border: '1px solid #65FC15',
      },
      title:{
        textAlign: 'start',
        color: '#2A3B47'
      }
  }));

const Portadas = ()=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }
    return(
        <Box marginTop='5%'>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title}>
                    Portadas
                </Typography>
            </Box>
            <TablaPortada/>
        </Box>
    )
}

export default Portadas