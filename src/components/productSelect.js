import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputSelect from '../common/components/InputSelect';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const datos = [
  {name: 'Aluminio', value: 'aluminio'},
  {name: 'Jaladores', value: 'jalador'}
]

export default function ProductSelect(props) {
  const classes = useStyles();
  const [linea, setLinea] = useState(false)

  const cambiar = (e)=>{
      const valor = e.target.value
      if(valor=='aluminio'){
        setLinea(true)
      }
      else{
        setLinea(false)
      }
      props.buscar(valor)
  }

  return (
    <Box display='flex'>
      <InputSelect data={datos} placeholder='productos' id='productos' onChange={cambiar}/>
      { linea ?
        (<FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Linea</InputLabel>
          <Select native defaultValue="" id="grouped-select">
              <option aria-label="None" value="" />
              <option value='L20'>L20</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
          </Select>
        </FormControl>) : null
      }
    </Box>
  );
}
