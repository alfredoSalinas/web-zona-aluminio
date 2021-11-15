import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import MenuAluminio from "./menuAluminio";
import MenuVidrio from "./menuVidrio";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menu:{
      '& .MuiPaper-root':{
          backgroundColor:'#1F1D1D',
          color:'#ffff',
          marginTop:'57px'
      }
    },
    menuItem:{
      '&:hover':{
        backgroundColor: '#313131'
      }
    }
  }));
  

const MenuAdmin = (props)=>{
    const classes = useStyles();

    return(
        <>
        <Menu className={classes.menu}
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            <MenuItem className={classes.menuItem} onClick={props.onClick} >
                Productos
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Tutoriales
            </MenuItem>
        </Menu>
        </>
    )
}

export default MenuAdmin