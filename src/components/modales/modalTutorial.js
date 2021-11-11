import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {makeStyles} from '@material-ui/core';
import FormularioTutorial from '../formularios/formularioTutorial';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width:'80%',
    padding:'15px', 
    display:'flex', 
    fontFamily: 'MyriadPro',
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center',
  },
}));

export default function ModalTutorial(props) {
  const classes = useStyles();
  
  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{maxHeight: '100%', overflow: 'auto'}}
      >
        <Fade in={props.open}>
          <FormularioTutorial />    
        </Fade>
      </Modal>
    </div>
  );
}

