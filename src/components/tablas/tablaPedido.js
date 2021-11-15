import React from "react";
import {makeStyles, Select, MenuItem} from "@material-ui/core";
import MiIcon from "../icon";
import editIcon from "../../iconos/editar.svg";
import delIcon from "../../iconos/eliminar.svg"
import CommonStyles from "../../common/styles/commonStyles";

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
        ...CommonStyles,

          td2:{
            ...CommonStyles.tdCenter,
            width: 50
          },
          formControl1 :{
            fontSize: '1rem',
            color: '#2A3B47',
            border:'#fff',
            backgroundClip: 'padding-box',
            webkitAppearance: 'none',
            mozAppearance: 'none',
            appearance: 'none',
            transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
            width: 50
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
                <th className={classes.th}>Borrar</th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className={classes.tdCenter}>{i + 1}</td>
                <td className={classes.tdCenter}>{item.producto}</td>
                <td className={classes.tdCenter}>{item.color}
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
                <td className={classes.tdCenter}>{item.unidad}</td>
                <td className={classes.td2}>{item.cantidad}
                    <input type="number" className={classes.formControl1} />
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