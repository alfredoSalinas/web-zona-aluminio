import React, { useState, useEffect } from "react";
import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import TablaTutoriales from "../components/tablas/tablaTutoriales";
import ModalTutorial from "../components/modales/modalTutorial";
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,
  }));

const Tutoriales = ()=>{
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }
    return(
        <Container className={classes.mt2}>
            <Box display='flex' justifyContent='space-between' marginBottom='3%'>
                <Typography variant='h5' className={classes.title1}>
                    Tutoriales
                </Typography>
                <button className={classes.buttonPrimary} onClick={()=>handleOpen(null)}>Añadir tutorial</button>
            </Box>
        </Container>
    )
}

export default Tutoriales