import React from "react";
import {makeStyles, } from "@material-ui/core";
import MiIcon from "../icon";
import addIcon from "../../iconos/añadirVerde.svg"
import CommonStyles from "../../common/styles/commonStyles";

const TablaCotizar = (props)=>{
    
    const datos = [
        {
            producto: 'Jamba',
            unidad: 'Barra',
        },
        {
            producto: 'Jamba',
            unidad: 'Barra',
        },
    ]

    const useStyles = makeStyles((theme) => ({
        ...CommonStyles,

      }));
      
      const classes = useStyles();
    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Producto</th>
                <th className={classes.th}>Color</th>
                
                <th className={classes.th}>Unidad</th>
                <th className={classes.th}>Añadir</th>

            {
                props.productos.map((item, i) => 
                <tr key={i}>
                <td className={classes.tdCenter}>{i + 1}</td>
                <td className={classes.tdCenter}>{item.nombre}</td>
                <td className={classes.tdCenter}>{item.color}</td>
                <td className={classes.tdCenter}>{item.unidad}</td>
                <td className={classes.td} style={{border:0, width:30}}>
                    <MiIcon >
                        <img src={addIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
            </tr>
                )
            }
            </table>
        </div>
    )
}

export default TablaCotizar