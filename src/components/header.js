import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.png'
import ListItemIcon from '@material-ui/core/SvgIcon'
import { Box, Button, Menu, MenuItem, ListItem } from '@material-ui/core';

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

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.fondo} >
        <Toolbar style={{display:'flex', justifyContent:'space-between'}} >
          <Box display='flex' alignItems='center'>
            <Box display='flex' justifyContent='flex-start'>
                <Button style={{marginRight:'60px'}}>
                    <img height='60px' src={logo}/>
                </Button>
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <Button aria-haspopup="true" onClick={handleClick}
                    style={{textTransform: 'capitalize', fontSize:'1em', marginRight:'40px'}} color='inherit'>
                    Productos
                </Button>
                <Button style={{textTransform: 'capitalize', fontSize:'1em', marginRight:'40px'}} color='inherit'>Cotizar</Button>
                <Button style={{textTransform: 'capitalize', fontSize:'1em'}} color='inherit'>Tutoriales</Button>
            </Box>
            </Box>
            <Button variant="outlined" color='inherit'>Registrarme</Button>
        </Toolbar>
      </AppBar>
        <div>
        
        <Menu className={classes.menu}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem className={classes.menuItem}>
                Perfiles de aluminio
                <ListItemIcon/>
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Quincalleria
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Jaladores
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Accesorios de vidrio templado
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Barandas
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
                Placas
            </MenuItem>
        </Menu>
        </div>
      </div>
  );
}
