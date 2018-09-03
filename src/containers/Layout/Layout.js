import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import classes from './Layout.css';
import Search from "../Search/Search";

export default class Layout extends Component {
    render (){
        return (
          <React.Fragment>
              <nav className={classes.Navbar}>This will be a header</nav>
              <section className={classes.Content}>
                  <section className={classes.Ad}>Left ad</section>
                  <section className={classes.ContentBody}>
                      <Switch>
                          <Route exact path='/search' component={Search}/>
                          <Route component={Search}/> {/*Temp route*/}
                      </Switch>
                  </section>
                  <section className={classes.Ad}>Right ad</section>
              </section>
              <section className={classes.Footer}>This will be a footer</section>
          </React.Fragment>
        );
    }
}