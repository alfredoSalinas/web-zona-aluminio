import React from "react";
import {makeStyles, } from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"
import CommonStyles from "../../common/styles/commonStyles";

const TablaPortada = ()=>{
    
    const datos = [
        {
            portada: '',
            accion: '',
        },
        {
            portada: '',
            accion: '',
        },
    ]

    const useStyles = makeStyles((theme) => ({
        ...CommonStyles,
        td2:{
            ...CommonStyles.tdCenter,
            width: 50
          },
    
      }));
      
      const classes = useStyles();
    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Portada</th>
                <th className={classes.th}>Editar</th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className={classes.td2}>{i + 1}</td>
                <td className={classes.td}>{item.portada}</td>
                <td className={classes.td} style={{border:0, width:30}}>{item.accion}
                    <MiIcon >
                        <img src={editIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
            </tr>
                )
            }
            </table>
        </div>
    )
}

export default TablaPortada