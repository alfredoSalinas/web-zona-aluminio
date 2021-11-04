import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/SvgIcon'
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    fondo:{
        backgroundColor: '#1F1D1D'
    },
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    button:{
        border: '1px solid white',
        color:'white',
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
  

const MenuProductos = (props)=>{
    const classes = useStyles();
    return(
        <Menu className={classes.menu}
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Perfiles de aluminio
                <ListItemIcon/>
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Quincalleria
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Jaladores
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Accesorios de vidrio templado
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Barandas
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Placas
            </MenuItem>
        </Menu>
    )
}

export default MenuProductos