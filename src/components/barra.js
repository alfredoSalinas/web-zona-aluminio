import { Box } from '@material-ui/core'
import React from 'react'
import barra from "../images/barra8.png"

const Barra = (props)=>{
  return (
    <Box position='fixed' height='50px'>
        <img width='100%' src={barra}/>
    </Box>
  )
}

export default Barra