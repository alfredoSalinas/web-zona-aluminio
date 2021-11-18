import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {makeStyles} from '@material-ui/core';
import FormularioProducto from '../formularios/formularioProducto';
import CommonStyles from "../../common/styles/commonStyles";

const useStyles = makeStyles((theme) => ({
  ...CommonStyles,
}));

export default function ModalProducto(props) {
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
          <FormularioProducto producto={props.producto} />    
        </Fade>
      </Modal>
    </div>
  );
}

