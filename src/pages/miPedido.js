import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaTutoriales from "../components/tablas/tablaTutoriales";
import ModalTutorial from "../components/modales/modalTutorial";
import TablaPedido from "../components/tablas/tablaPedido";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    
  }));

const MiPedido = ()=>{
    const classes = useStyles()
    
    return(
        <Container className={classes.mt5}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Mi Pedido
                </Typography>
                <Link to='/cotizar' style={{textDecoration:'none', color:'inherit'}} >
                <button className={classes.buttonPrimary} >Atras</button>
                </Link>
            </Box>
            <TablaPedido/>
            <Box display='flex' justifyContent='space-between' marginLeft='20%' marginRight='20%' marginTop='5%'>
                <button className={classes.buttonPrimary} >Enviar pedido</button>
                <button className={classes.buttonTerciary} >Imprimir pedido</button>
            </Box>
        </Container>
    )
}

export default MiPedido