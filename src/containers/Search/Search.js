import React, { Component } from 'react';
import Textbox from "../../components/forms/Textbox/Textbox";
import classes from './Search.css';
import InputAdornmentButton from "../../components/forms/InputAdornmentButton/InputAdornmentButton";
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends Component{
    render(){
        return(
           <div className={classes.Search}>
               <Textbox
                    placeholder="Start typing name, phone number, email address or social profile name"
                    autoFocus
                    endAdornment={
                        <InputAdornmentButton onClick={null}>
                                <SearchIcon/>
                        </InputAdornmentButton>
                        }/>
           </div>
        )
    }
}