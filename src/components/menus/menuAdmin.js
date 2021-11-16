import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import MenuAluminio from "./menuAluminio";
import MenuVidrio from "./menuVidrio";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menu:{
      '& .MuiPaper-root':{
          backgroundColor:'#1F1D1D',
          color:'#ffff',
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
            open={props.open}
            onBlur={props.handleClose}
        >
            <Link to='/adminProductos' 
              style={{textDecoration:'none', color:'inherit'}}
              onClick={props.handleClose}>
            <MenuItem className={classes.menuItem}>
                Productos
            </MenuItem>
            </Link>
            <Link to='/adminTutoriales' 
              style={{textDecoration:'none', color:'inherit'}}
              onClick={props.handleClose}>
            <MenuItem className={classes.menuItem}>
                Tutoriales
            </MenuItem>
            </Link>
            <Link to='/portadas' 
              style={{textDecoration:'none', color:'inherit'}}
              onClick={props.handleClose}>
            <MenuItem className={classes.menuItem}>
                Portadas
            </MenuItem>
            </Link>
        </Menu>
        </>
    )
}

export default MenuAdmin