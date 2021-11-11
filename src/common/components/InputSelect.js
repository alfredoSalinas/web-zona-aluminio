import { Box, Select, InputLabel, FormControl } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const InputSelect = ({
    id='',
    isValid = true,
    messageError = '',
    value = '',
    onChange,
    data = [],
  })=>{
    const classes = useStyles();
    return(
        <Box>
            {data.length > 0 && 
                (
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor={id}>Producto</InputLabel>
                <Select id={id} onChange={onChange}>
                    <option aria-label="None" value="" />
                    {
                        data.map((item, index)=>(
                            <option key={index} value={item.value}>{item.name}</option>
                        ))
                    }

                </Select>
                </FormControl>
                )
            }
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));

export default InputSelect