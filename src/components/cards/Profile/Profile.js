import React from 'react';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import classes from './Profile.css';
import Avatar from "@material-ui/core/Avatar/Avatar";

const profile = (props) => {
    return(
      <Card className={classes.Card}>
          <CardContent className={classes.CardContent}>
              {props.socialLogo? <img className={classes.SocialLogo} src={props.socialLogo} /> : null}
              <div className={classes.Column}>
                  <Avatar
                      alt={props.name}
                      src={props.avatar}
                      className={classes.Avatar}
                  />
              </div>
              <div className={classes.Column}>
                  <Typography variant="headline">
                      {props.name}
                  </Typography>
                  <Typography variant="subheading" color="textSecondary">
                      <ul className={classes.List}>
                        {props.cities.map(city=> <li key={city.id}>{city.name}, {city.state.acronym}</li>)}
                      </ul>
                  </Typography>
              </div>
              <div className={classes.Column}>
                  <Typography variant="subheading" color="textSecondary">
                      <ul className={classes.List}>
                          {props.companies.map(company=> <li key={company.id}>{company.name}</li>)}
                      </ul>
                  </Typography>
              </div>
              <div className={classes.Column}>
                  <Typography variant="subheading" color="textSecondary">
                      <ul className={classes.List}>
                          {props.schools.map(school=> <li key={school.id}>{school.name}</li>)}
                      </ul>
                  </Typography>
              </div>
          </CardContent>
      </Card>
    );
};

export default profile;