import React from 'react';
import Input from "@material-ui/core/Input/Input";

const textbox = (props) =>{
    return(
        <Input
            onChange={props.onChange}

        ></Input>
    );
};

export default textbox;