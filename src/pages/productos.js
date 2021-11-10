import React, { useState, useEffect } from "react";
import ModalProducto from "../components/modales/modalProducto";


const Productos = ()=>{

    return(
        <div style={{marginTop:80, marginLeft:'5%', marginRight:'5%'}}>
            <div style={{justifyContent:'space-between', marginBottom:'3%'}}>
                <div className="title3">
                    Productos
                    <button onClick={ver}>ver</button>
                </div>
                <button className='button btnPrimary' onClick={()=>handleOpen(null)}>Añadir producto</button>
            </div>
            <ModalProducto docente={docente} open={open} handleClose={handleClose} />
        </div>
    )
}

export default Productos