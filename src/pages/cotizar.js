import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaCotizar from "../components/tablas/tablaCotizar";
import carritoIcon from "../iconos/carrito.svg"
import MiIcon from "../components/icon";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
  }));

const Cotizar = ()=>{
    const classes = useStyles()
    //const commonStyles = CommonStyles()
    
    return(
        <Container className={classes.mt4}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Cotizar
                </Typography>
                <Link to='/pedido'>
                <button className={classes.buttonPrimary} >Mi pedido</button>
                </Link>
               
            </Box>
            <TablaCotizar/>
        </Container>
    )
}

export default Cotizar