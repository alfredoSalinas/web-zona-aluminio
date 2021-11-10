import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import MenuAluminio from "./menuAluminio";
import MenuVidrio from "./menuVidrio";

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
    const [openAluminio, setOpenAluminio] = React.useState(false);
    const [anchorAluminio, setAnchorAluminio] = React.useState(null);
    const [openVidrio, setOpenVidrio] = React.useState(false);
    const [anchorVidrio, setAnchorVidrio] = React.useState(null);

    const handleClickAluminio = (event) => {
        setAnchorAluminio(event.currentTarget);
        setOpenAluminio(true)
    };

    const handleCloseAluminio = () => {
        setAnchorAluminio(null);
        setOpenAluminio(false)
    };

    
    

    const handleClickVidrio = (event) => {
        setAnchorVidrio(event.currentTarget);
        setOpenVidrio(true)
    };

    const handleCloseVidrio = () => {
        setAnchorVidrio(null);
        setOpenVidrio(false)
    }
    return(
        <>
        <Menu className={classes.menu}
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            <MenuItem className={classes.menuItem} onClick={handleClickAluminio}>
                Perfiles de aluminio
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Quincalleria
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Jaladores
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClickVidrio}>
                Accesorios de vidrio templado
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Barandas
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                Placas
            </MenuItem>
        </Menu>
        <MenuAluminio open={openAluminio} anchorEl={anchorAluminio} handleClose={handleCloseAluminio} />
        <MenuVidrio open={openVidrio} anchorEl={anchorVidrio} handleClose={handleCloseVidrio} />
        </>
    )
}

export default MenuProductos