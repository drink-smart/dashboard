import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Opacity from '@material-ui/icons/Opacity';
import LocalDrink from '@material-ui/icons/LocalDrink';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function UserConsuptionCard(props) {
  const { classes, theme, name, image, age} = props;

  return (
    <Card className={classes.card}>
        {/* <CardMedia
            className={classes.cover}
            image="images/peter.png"
            title="Peter Griffin"
        /> */}
        <CardMedia
            className={classes.cover}
            image={image}
            title={name}
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Age: {age}
                </Typography>
            </CardContent>
            <div className={classes.controls}>
                <IconButton aria-label="Consumption" style={{color: "green"}}>
                    <LocalDrink/>
                </IconButton>
                <IconButton aria-label="Status" style={{color: "red"}}>
                    <Opacity />
                </IconButton>
            </div>
        </div>
    </Card>
  );
}

UserConsuptionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserConsuptionCard);