import React from "react";
import {makeStyles, Select, MenuItem} from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"

const TablaPedido = ()=>{
    
    const datos = [
        {
            producto: 'Jamba',
            color: '',
            unidad: 'Barra',
            cantidad: '',
        },
        {
            producto: 'Jamba',
            color: '',
            unidad: 'Barra',
            cantidad: '',
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
          },
          formControl :{
            fontSize: '1rem',
            color: '#2A3B47',
            border:'#fff',
            backgroundClip: 'padding-box',
            webkitAppearance: 'none',
            mozAppearance: 'none',
            appearance: 'none',
            transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
          },

      }));
      
      const classes = useStyles();
      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <div>
            <table className={classes.table}>
                <th className={classes.th}>Nro.</th>
                <th className={classes.th}>Producto</th>
                <th className={classes.th}>Color</th>
                <th className={classes.th}>Unidad</th>
                <th className={classes.th}>Cantidad</th>
                <th></th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className={classes.td1}>{i + 1}</td>
                <td className={classes.td1}>{item.producto}</td>
                <td className={classes.td1}>{item.color}
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={age}
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Natural</MenuItem>
                        <MenuItem value={20}>Champagne</MenuItem>
                        <MenuItem value={30}>Negro</MenuItem>
                        <MenuItem value={40}>Cromado</MenuItem>
                        <MenuItem value={50}>Bronce</MenuItem>
                        <MenuItem value={60}>Sin color</MenuItem>
                    </Select>  
                </td>
                <td className={classes.td1}>{item.unidad}</td>
                <td className={classes.td1}>{item.cantidad}
                    <input type="number" className={classes.formControl} />
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

export default TablaPedido