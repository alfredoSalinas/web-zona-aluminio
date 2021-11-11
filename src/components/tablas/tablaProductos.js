import React from "react";
import {makeStyles, } from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"

const TablaProductos = ()=>{
    
    const datos = [
        {
            codigo: '452356',
            descripcion: 'Usado para ventanas',
            precio: '235 Bs',
        },
        {
            codigo: '452356',
            descripcion: 'Usado para ventanas',
            precio: '235 Bs',
        }
    ]

    const useStyles = makeStyles((theme) => ({
        td:{
            border: '1px solid #949ba0',
            borderRadius: 8,
            color: '#2A3B47',
            fontSize: '1.1em',
            textAlign: 'left',
            padding: 5
          },
          td1:{
            border: '1px solid #949ba0',
            borderRadius: 8,
            color: '#2A3B47',
            fontSize: '1.1em',
            textAlign: 'center',
            padding: 5
          },
          table:{
            width: '100%'
            },
        th:{
            color: '#2A3B47',
            fontSize: '1em'
        },

      }));
      
      const classes = useStyles();
    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Codigo</th>
                <th className={classes.th}>Descripción</th>
                <th className={classes.th}>Precio</th>
                <th></th>
                <th></th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className={classes.td1}>{i + 1}</td>
                <td className={classes.td1}>{item.codigo}</td>
                <td className={classes.td}>{item.descripcion}</td>
                <td className={classes.td1}>{item.precio}</td>
                <td className={classes.td} style={{border:0, width:30}}>
                    <MiIcon>
                        <img src={editIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
                <td className={classes.td} style={{border:0, width:30}}>
                    <MiIcon >
                        <img src={delIcon} width='25px' alt=""/>
                    </MiIcon>
                </td>
            </tr>
                )
            }
            </table>
        </div>
    )
}

export default TablaProductos