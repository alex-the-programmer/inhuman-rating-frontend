import React from 'react';
import Input from "@material-ui/core/Input/Input";

const textbox = (props) =>{
    return(
        <Input
            onChange={props.onChange}
            fullWidth
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            endAdornment={props.endAdornment}
        ></Input>
    );
};

export default textbox;