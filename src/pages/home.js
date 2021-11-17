import React from "react";
import {Container, Modal, Box, makeStyles  } from "@material-ui/core";
import portada from "../images/principal.png"
import marcas from "../images/PORTADA 3.1.png"
import tarjeta from "../images/portada.jpg"
import CommonStyles from "../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
   
    
  }));
  

const Home = ()=>{
    const classes = useStyles()
    return(
        <Box>
            <Box>
                <img width='100%' src={portada}/>
            </Box>
            <Box>
                <img width='100%' src={marcas}/>
            </Box>
            <Box>
                <img width='100%' src={tarjeta}/>
            </Box>
        </Box>
       
    )
}

export default Home