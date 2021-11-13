import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaCotizar from "../components/tablas/tablaCotizar";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";
import Color from '../common/styles/colors'

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    title1:{
        textAlign: 'start',
        color: '#2A3B47'
    }
  }));

const Cotizar = ()=>{
    const classes = useStyles()
    //const commonStyles = CommonStyles()
    
    return(
        <Container className={classes.mt2}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Cotizar
                </Typography>
                <Link to='/pedido' className={classes.link}  >
                <Typography className={classes.textButton}>
                    Mi pedido
                </Typography>
                </Link>
            </Box>
            <TablaCotizar/>
        </Container>
    )
}

export default Cotizar