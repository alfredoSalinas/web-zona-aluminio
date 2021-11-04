import React from "react";
import './style.css'

const Card = ({datos, fotoDocente, iconBandera})=>{
    return(
        <div className="card">
            <img src={datos.portada} className="imgCard" alt="" />
            <div className="subtitle2 centrado">
                {datos.titulo}
            </div>
            <div className="parrafo centrado" style={{textAlign:'justify', textJustify:'inter-word'}}>
                {datos.resumen}
            </div>
            <div className="parrafo centrado cardPosition" style={{textAlign:'justify', textJustify:'inter-word'}}>
                <button className="btnSecundary">Más</button>
                <p className="numero">{ datos.precio }</p>
            </div>
            <div className="parrafo centrado cardPosition cardColor" style={{textAlign:'justify', textJustify:'inter-word'}}>
                <img src={fotoDocente} width="30px" className="circulo" alt="" />
                    {datos.docente}
                <img src={iconBandera} height="20px" alt="" />
            </div>
        </div>
    )
}

export default Card