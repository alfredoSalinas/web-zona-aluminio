import React from "react";
import { makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const 
MiPopper = (props)=>{
    return(
        <Popper open={props.open} anchorEl={props.anchorEl} placement={props.placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
           {props.children}
          </Fade>
        )}
      </Popper>
    )
}

export default MiPopper