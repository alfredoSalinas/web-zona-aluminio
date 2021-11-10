import React from "react";
import { Icon } from "@material-ui/core";
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

    return (
        <div>
            <table>
                <th>Nro.</th>
                <th>Codigo</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th></th>
                <th></th>

            {
                datos.map((item, i) => 
                <tr key={i}>
                <td className="tdCenter">{i + 1}</td>
                <td>{item.codigo}</td>
                <td>{item.descripcion}</td>
                <td style={{textAlign:'center'}}>{item.precio}</td>
                <td style={{border:0, width:30}}>
                    <Icon>
                        <img src={editIcon} width='25px' alt=""/>
                    </Icon>
                </td>
                <td style={{border:0, width:30}}>
                    <Icon>
                        <img src={delIcon} width='25px' alt=""/>
                    </Icon>
                </td>
            </tr>
                )
            }
            </table>
        </div>
    )
}

export default TablaProductos