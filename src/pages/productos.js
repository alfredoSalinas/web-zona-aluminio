import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";
import {makeStyles} from '@material-ui/core';

const Productos = ()=>{
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          width:'80%',
          padding:'15px', 
          display:'flex', 
          fontFamily: 'MyriadPro',
          flexDirection:'column', 
          justifyContent:'center',
          alignItems:'center',
        },
      }));
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

export default Productos