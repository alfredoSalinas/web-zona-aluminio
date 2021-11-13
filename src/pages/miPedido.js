import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaTutoriales from "../components/tablas/tablaTutoriales";
import ModalTutorial from "../components/modales/modalTutorial";
import TablaPedido from "../components/tablas/tablaPedido";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,  
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
    
    return(
        <Container className={classes.container}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title}>
                    Mi Pedido
                </Typography>
                <Link to='/cotizar' className={classes.link} >
                <Typography className={classes.textButton}>
                    Atras
                </Typography>
                </Link>
            </Box>
            <TablaPedido/>
            <Box display='flex' justifyContent='space-between' marginLeft='20%' marginRight='20%' marginTop='5%'>
                <button className={classes.button} >Enviar pedido</button>
                <button className={classes.button} >Imprimir pedido</button>
            </Box>
        </Container>
    )
}

export default MiPedido