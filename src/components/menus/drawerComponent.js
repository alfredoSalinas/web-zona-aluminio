import { Drawer, IconButton, List, ListItem, ListItemText, Paper, Box, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react"; 
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const DrawerComponent = ()=>{
    const [openDrawer, setOpenDrawer] = useState(false)

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: 30,
        
        "&:hover":{
        color: '#5be611'
        }
    },
    paper: {
        width: 300,
        background: '#1F1D1D',
        color: 'white'
    },
    hover:{
        "&:hover":{
        color: '#5be611'
        }
    }
    });

    const classes = useStyles();
    const list =()=>( 
        <Paper className={classes.paper}>
    <List style={{marginTop: 100}}>
    <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
            <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                Inicio
            </Link>
        </ListItemText>
    </ListItem>
    <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
            <Link to='/productos' style={{textDecoration:'none', color:'inherit'}}>
                Productos
            </Link>
        </ListItemText>
    </ListItem>
    <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText>
            <Link to='/cotizar' style={{textDecoration:'none', color:'inherit'}}>
                Cotizar
            </Link>
        </ListItemText>
    </ListItem>
</List>
</Paper>
)

    return(
        <>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                style={{color: 'white'}}
            >
                <MenuIcon />
            </IconButton>
            <Drawer 
                open={openDrawer} 
                onClose={() => setOpenDrawer(false)}
                classes={{paper: classes.paper}}
            >
             <Paper style={{backgroundColor:'#5be611', width:300, height:100, paddingTop:20}}>
                <img src={logo} height='90px'/>
                 </Paper>   
            {list()}
            </Drawer>
            
        </>
    )
}

export default DrawerComponent