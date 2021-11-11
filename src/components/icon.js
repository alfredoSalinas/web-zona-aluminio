import React from "react";
import {
    makeStyles,
    } from '@material-ui/core';

    const useStyles = makeStyles((theme) => ({
        icon:{
          backgroundColor: 'transparent',
          border: '1px solid transparent',
        "&:hover": {
            cursor: 'pointer',
            opacity: '60%'
          }
      }}));

const MiIcon = (props)=>{
    const classes = useStyles();

    return(
        <button className={classes.icon} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default MiIcon