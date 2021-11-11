import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {Box, makeStyles, Typography} from '@material-ui/core';
import TablaProductos from "../components/tablas/tablaProductos";
import Grid from '@material-ui/core/Grid';
import Cards from '../components/cards'
import foto from '../images/aluminio.png'

const productos = [
    {
        codigo: 'cod1',
        producto: '',
        description: 'Usado para ventanas dobles corredizas.',
        precio: 0,
        color: 'champagne',
        grupo: 'aluminio',
        subgrupo: 'L20',
        foto: foto
    },
    {
        codigo: 'cod2',
        producto: '',
        precio: 0,
        color: 'champagne',
        grupo: 'aluminio',
        subgrupo: 'L20',
        foto: foto
    },

]



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
      }
  }));

const Productos = ()=>{
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
                    Productos
                </Typography>
            </Box>
            <div className={classes.root}>
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
            </div>
        </Box>
    )
}

export default Productos

/*
const Productos = ()=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    return(
        <div style={{marginTop:80, marginLeft:'5%', marginRight:'5%'}}>
            <div style={{justifyContent:'space-between', marginBottom:'3%'}}>
                <div className="title3">
                    Productos
                </div>
                <button className='button btnPrimary' onClick={()=>handleOpen(null)}>Añadir producto</button>
            </div>
            
            <ModalProducto  open={open} handleClose={handleClose} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default Productos
*/