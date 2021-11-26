import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Box, Paper,Typography } from '@material-ui/core';

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

export default function DrawerProductos(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const list = (anchor) => (
        <Paper className={classes.paper}>
        <Paper  style={{backgroundColor:'#5be611',paddingLeft:20, paddingTop:50, paddingBottom:25}}>
          <Typography variant='h5'style={{color:'#1F1D1D'}} className={classes.title1} >
            Productos
          </Typography>
        </Paper>
      <List style={{maxHeight: 550, overflow: 'auto'}}>
      <List>
      <ListItem button onClick={handleClick} className={classes.hover}>
        <ListItemText primary="Aluminio" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={props.onClose} className={classes.nested}>
              <ListItemText primary="Línea 12"/>
            </ListItem>
            <ListItem button onClick={props.onClose} className={classes.nested} >
              <ListItemText primary="Línea 20" />
            </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Línea 25" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Línea 35" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Línea 42" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Línea 4000" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Tubos" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Vidrio Templado" />
          </ListItem>
        </List>
      </Collapse>
      </List>
      <List>
        <ListItem button  onClick={props.onClose} className={classes.hover}>
        <ListItemText primary='Quincallería' />
        </ListItem>
      </List>
      <List>
        <ListItem button  onClick={props.onClose} className={classes.hover} >
        <ListItemText primary='Jaladores' />
        </ListItem>
      </List>
      <List>
      <ListItem button onClick={handleClick} className={classes.hover}>
        <ListItemText primary="accesorios de Vidrio Templado" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={props.onClose} className={classes.nested}>
              <ListItemText primary="Kits" />
            </ListItem>
            <ListItem button onClick={props.onClose} className={classes.nested} >
              <ListItemText primary="Herraje de Correr" />
            </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Herraje de Abatir" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Herraje Basculante" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Herraje Paños Fijos" />
          </ListItem>
          <ListItem button onClick={props.onClose} className={classes.nested}>
            <ListItemText primary="Herraje Minis" />
          </ListItem>
        </List>
      </Collapse>
      </List>
      <List>
        <ListItem button  onClick={props.onClose} className={classes.hover}>
        <ListItemText primary='Barandas' />
        </ListItem>
      </List>
      <List>
        <ListItem button  onClick={props.onClose} className={classes.hover} >
        <ListItemText primary='Placas' />
        </ListItem>
      </List>
      </List>
    </Paper>
    )
  
  
  return (
    <Drawer 
        anchor={props.anchor} 
        open={props.open} 
        onClose={props.onClose}
        classes={{paper: classes.paper}}
    >
    {list(props.anchor)}
    </Drawer>
  );
}
