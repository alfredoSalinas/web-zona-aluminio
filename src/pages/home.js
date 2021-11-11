import React from "react";
import {Container, Modal } from "@material-ui/core";
import FormularioProducto from "../components/formularios/formularioProducto";
import ModalProducto from "../components/modales/modalProducto";
import Productos from "./productos";
import Tutoriales from "./tutoriales";
import TablaPortada from "../components/tablas/tablaPortada";
import Portadas from "./portadas";
import Cards from "../components/cards";

const Home = ()=>{
    return(
        <Container>
           <Tutoriales/>
        </Container>
    )
}

export default Home