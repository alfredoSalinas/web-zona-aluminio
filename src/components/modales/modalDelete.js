import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
        Paper,
        makeStyles,
        Typography,
        Box,
        } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width:'40%',
    padding:'15px', 
    display:'flex', 
    fontFamily: 'MyriadPro',
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center',
  },
}));

export default function ModalDelete(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
      >
        <Fade in={props.open}>
            <Paper className={classes.paper}>
                <Typography style={{padding: 20, marginBottom:1}}>{props.title} </Typography>
                <Box display='flex' justifyContent='space-between' width='50%'>
                    
                <button className="button btnTerciary" onClick={props.eliminar}>Si</button>
                <button className='button btnPrimary' onClick={props.handleClose}>No</button>
                </Box>
            </Paper>   
        </Fade>
      </Modal>
    </div>
  );
}

