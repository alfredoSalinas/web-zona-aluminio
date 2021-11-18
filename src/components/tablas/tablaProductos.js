import React, { useState } from "react";
import {makeStyles, } from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"
import CommonStyles from "../../common/styles/commonStyles";
import ModalDelete from "../modales/modalDelete";

const TablaProductos = (props)=>{
    const [open, setOpen] = React.useState(false);  
    const classes = useStyles();
    const [producto, setProducto] = useState(null)
    
    const handleOpen = (item, i) => {
        setProducto(item)
        setOpen(true);
        
      };
    
    const handleClose = () => {
        setProducto(null)
        setOpen(false);
    };
/*
    const eliminarProducto = async ()=>{
        await deleteDoc(doc(db, "productos", docente.codigo))
        .then(()=>{
            //dispatch(delDocente(docente.carnet))
        })
        .catch(e => {
            console.log(e)
        })
        handleClose()
    }
*/
    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Codigo</th>
                <th className={classes.th}>Descripción</th>
                <th className={classes.th}>Precio</th>
                <th className={classes.th}>Editar</th>
                <th className={classes.th}>Borrar</th>

            {
                props.productos.map((item, i) => 
                <tr key={i}>
                <td className={classes.tdCenter}>{i + 1}</td>
                <td className={classes.tdCenter}>{item.codigo}</td>
                <td className={classes.td}>{item.descripcion}</td>
                <td className={classes.tdCenter}>{item.precio}</td>
                <td className={classes.td} style={{border:0, width:30}}
                    onClick={()=>props.onClick(item)}
                >
                    <MiIcon>
                        <img src={editIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
                <td className={classes.td} style={{border:0, width:30}} onClick={()=>handleOpen(item)}>
                    <MiIcon >
                        <img src={delIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
            </tr>
                )
            }
            </table>
            <ModalDelete 
                open={open} 
                handleClose={handleClose} 
                //eliminar={eliminarProducto}
                title='Eliminar docente?'
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    ...CommonStyles,

  }));

export default TablaProductos