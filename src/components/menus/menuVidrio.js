import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
  menu:{
    '& .MuiPaper-root':{
        backgroundColor:'#1F1D1D',
        color:'#ffff',
        marginLeft: '0'
    }
  },
  menuItem:{
    '&:hover':{
      backgroundColor: '#313131'
    }
  }
}));

export default function MenuVidrio(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Popper className={classes.menu} open={props.open} anchorEl={props.anchorEl} placement='right-start' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Kits
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Herraje de Correr
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Herraje de Abatir
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Herraje Basculante
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Herraje Pa??os Fijos
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={props.handleClose}>
                    Herraje Minis
                </MenuItem>
            </Paper>
          </Fade>
        )}
      </Popper>
      
    </div>
  );
}
