import { Drawer, IconButton, List, ListItem, ListItemText, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const DrawerComponent = ()=>{
    const [openDrawer, setOpenDrawer] = useState(false)

    return(
        <>
            <Drawer 
                open={openDrawer} 
                onClose={() => setOpenDrawer(false)}
            >
                <Box display='flex' justifyContent='flex-start'>
              <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                <Button style={{marginRight:'60px'}}>
                    <img height='60px' src={logo}/>
                </Button>
              </Link>
            </Box>
                <List style={{marginTop: 100}}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/'>
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/productos'>
                                Productos
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to='/cotizar'>
                                Cotizar
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                style={{color: 'white'}}
            >
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent