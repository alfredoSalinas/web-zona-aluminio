import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../images/logo.png'
import ListItemIcon from '@material-ui/core/SvgIcon'
import { Box, Button, Menu, MenuItem, ListItem } from '@material-ui/core';
import MenuAdmin from './menus/menuAdmin';
import { Link } from 'react-router-dom';


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
  const [anchorAdmin, setAnchorAdmin] = React.useState(null);
  const [openAdmin, setOpenAdmin] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClickAdmin = (newPlacement) => (event) => {
    setAnchorAdmin(event.currentTarget);
    setOpenAdmin(true);
    setPlacement(newPlacement);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleCloseAdmin = ()=>{
    setOpenAdmin(false)
  }


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.fondo} >
        <Toolbar style={{display:'flex', justifyContent:'space-between'}} >
          <Box display='flex' alignItems='center'>
            <Box display='flex' justifyContent='flex-start'>
            <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                <Button style={{marginRight:'60px'}}>
                    <img height='60px' src={logo}/>
                </Button>
              </Link>
            </Box>
            <Box display='flex' justifyContent='flex-start'>
                <Link to='/productos' style={{textDecoration:'none', color:'inherit'}}>
                <Button aria-haspopup="true"
                    style={{textTransform: 'capitalize', fontSize:'1em', marginRight:'40px'}} color='inherit'>
                    Productos
                </Button>
                </Link>
                <Link to='/cotizar' style={{textDecoration:'none', color:'inherit'}}>
                  <Button style={{textTransform: 'capitalize', fontSize:'1em', marginRight:'40px'}} color='inherit'>Cotizar</Button>
                </Link>
                <Link to='/tutoriales' style={{textDecoration:'none', color:'inherit'}}>
                <Button style={{textTransform: 'capitalize', fontSize:'1em', marginRight:'40px'}} color='inherit'>Tutoriales</Button>
                </Link>
                <Button style={{textTransform: 'capitalize', fontSize:'1em'}} color='inherit' onClick={handleClickAdmin('right-start')}>
                  Admin
                </Button>
            </Box>
            </Box>
            <Button variant="outlined" color='inherit'>Registrarme</Button>
        </Toolbar>
      </AppBar>
        
        <MenuAdmin open={openAdmin} anchorEl={anchorAdmin} handleClose={handleCloseAdmin} />
      </div>
  );
}
