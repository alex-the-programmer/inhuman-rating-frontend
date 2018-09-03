import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";

const inputAdornmentButton = (props) => {
    return (
        <InputAdornment position={props.position || "end"}>
            <IconButton
                aria-label="Search (take out to props)"
                onClick={props.onClick}
            >
                {props.children}
            </IconButton>
        </InputAdornment>
    );
};

export default inputAdornmentButton;