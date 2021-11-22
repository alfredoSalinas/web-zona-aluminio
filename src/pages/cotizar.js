import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaCotizar from "../components/tablas/tablaCotizar";
import carritoIcon from "../iconos/carrito.svg"
import MiIcon from "../components/icon";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";
import { listaProductos } from "../services/api";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    title1:{
        textAlign: 'start',
        color: '#2A3B47'
    }
  }));

const Cotizar = ()=>{
    const classes = useStyles()
    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        listaProductos((res)=>{
            setProductos(res)
        }) 
     },[])

    return(
        <Container className={classes.mt6}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Cotizar
                </Typography>
                <Link to='/pedido'>
                <button className={classes.buttonPrimary} >Mi pedido</button>
                </Link>
               
            </Box>
            <TablaCotizar productos={productos}/>
        </Container>
    )
}

export default Cotizar