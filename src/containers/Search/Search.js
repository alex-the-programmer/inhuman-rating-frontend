import React, { Component } from 'react';
import Textbox from "../../components/forms/Textbox/Textbox";
import classes from './Search.css';
import InputAdornmentButton from "../../components/forms/InputAdornmentButton/InputAdornmentButton";
import SearchIcon from '@material-ui/icons/Search';
import ProfileCard from "../../components/cards/Profile/Profile";

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


               <div className={classes.CardsList}>

               </div>
                <ProfileCard
                    name="Alex M"
                    cities={[{
                        id: 1,
                        name: 'San Francisco',
                        state: {
                            acronym: 'CA'
                        }
                    }, {
                        id: 2,
                        name: 'Sunnyvale',
                        state: {
                            acronym: 'CA'
                        }
                    }]}
                    companies={[{
                        id: 1,
                        name: 'TrueCar'
                    }, {
                        id: 2,
                        name: 'Beepi'
                    }]}
                    schools={[{
                        id: 1,
                        name: 'School 1'
                    }, {
                        id: 2,
                        name: 'School 2'
                    }]}/>

           </div>
        )
    }
}