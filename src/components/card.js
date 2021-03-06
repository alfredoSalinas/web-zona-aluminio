import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
  },
  paper: {
    height: 290,
    width: 240,
    border:'1px solid #65FC15',
    marginRight:20
  },
  control: {
    padding: theme.spacing(2),
  },
  box:{
    display:'flex',
    justifyContent: 'center',
    alignContent:'center',
    width:'100%',
    height:30,
    backgroundColor: '#1F1D1D',
    color:'#fff',
    padding:'2%'
  },
  box1:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width:'100%',
    padding:'4%',
    backgroundColor: '#1F1D1D',
    color:'#949ba0',
    bottom:0
  }, 
  boton:{
    display:'flex',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 400,
    color: '#fff',
    backgrounClip: 'padding-box',
    cursor: 'pointer',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    borderRadius: 5,
    padding:'2%',
    border:'1px solid #65FC15',
    marginTop: 10
  }
}));

const MiCard = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default MiCard