import React from "react";
import { Card, Container, Modal } from "@material-ui/core";
import FormularioProducto from "../components/formularios/formularioProducto";
import FormularioProductos from "../components/formularios/formularioProductos";
import ModalProducto from "../components/modales/modalProducto";
import Productos from "./productos";

const Home = ()=>{
    return(
        <Container>
           <Productos/>
        </Container>
    )
}

export default Home