import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaPortada from "../components/tablas/tablaPortada";
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
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
        <Container className={classes.mt4}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Portadas
                </Typography>
            </Box>
            <TablaPortada/>
        </Container>
    )
}

export default Portadas