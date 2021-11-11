import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ProductSelect() {
  const classes = useStyles();

  const cambiar = (e)=>{
      console.log(e.target.value)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Producto</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" onChange={cambiar}>
            <option aria-label="None" value="" />
            <option value='aluminio'>Aluminio</option>
            <option value={2}>Option 2</option>
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Linea</InputLabel>
        <Select native defaultValue="" id="grouped-select">
            <option aria-label="None" value="" />
            <option value='L20'>L20</option>
            <option value={2}>Option 2</option>
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
        </Select>
      </FormControl>
    </div>
  );
}
