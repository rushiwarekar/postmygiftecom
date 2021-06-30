import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ({ name, label}) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={10} sm={4}>
        <Controller
            control={control}
            name={name}
            render = {({ field })=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                />
            )}
        />
    </Grid>
    )
}

export default FormInput;
