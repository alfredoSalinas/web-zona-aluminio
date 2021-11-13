import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaCotizar from "../components/tablas/tablaCotizar";
import { Link } from 'react-router-dom';
import CommonStyles from "../common/styles/commonStyles";
import Color from '../common/styles/colors'

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
    button: {
        ...CommonStyles.link,
        height: 40,
        fontSize: '1rem',
        fontWeight: 400,
        //fontFamily: 'MyriadPro',
        color: '#1F1D1D',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        borderRadius: 5,
        padding: '0.5rem 1.5rem 0.5rem 1.5rem',
        backgroundColor: Color.primary,
        border: '1px solid #65FC15',

        "&:hover": {
            border: '1px solid #84ff42',
            backgroundColor: '#84ff42',
          },
      },
      
      title1:{
        textAlign: 'start',
        color: '#2A3B47'
      },
      container:{
        marginTop:'2%'
      },
  }));

const Cotizar = ()=>{
    const classes = useStyles()
    //const commonStyles = CommonStyles()
    
    return(
        <Container className={classes.container}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Cotizar
                </Typography>
                <Link to='/pedido'>
                <button className={classes.button} >Mi pedido</button>
                </Link>
               
            </Box>
            <TablaCotizar/>
        </Container>
    )
}

export default Cotizar