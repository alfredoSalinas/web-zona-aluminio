import React from "react";
import {makeStyles, } from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"

const TablaTutoriales = ()=>{
    
    const datos = [
        {
            titulo: 'Como hacer una ventana corrediza',
            imagen: '',
            enlace: '',
        },
        {
            titulo: 'Como hacer una ventana corrediza',
            imagen: '',
            enlace: '',
        },
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
        link:{
            fontSize: '1.1em',
            color: '#32A2F1',
            textDecoration: 'underline',
            
            "&:hover": {
                cursor: 'pointer',
                color: '#329be6e5'
              },
          }

      }));
      
      const classes = useStyles();
    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Titulo</th>
                <th className={classes.th}>Imagen</th>
                <th className={classes.th}>Enlace</th>
                <th></th>
                <th></th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className={classes.td1}>{i + 1}</td>
                <td className={classes.td}>{item.titulo}</td>
                <td className={classes.td1}>{item.imagen}
                    <a href="#" className={classes.link}>ver</a>
                </td>
                <td className={classes.td1}>{item.enlace}
                    <a href="#" className={classes.link}>ver</a>
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

export default TablaTutoriales