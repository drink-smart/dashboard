import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Opacity from '@material-ui/icons/Opacity';
import LocalDrink from '@material-ui/icons/LocalDrink';
import AccessTime from '@material-ui/icons/AccessTime';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function UserGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">People</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}> onClick={props.handleClick(tile)}>
            <img src={tile.img} alt={tile.user} style={{top: "0", width: "200px", position: "initial", transform: "initial"}}/>
            <GridListTileBar
              title={tile.user}
              subtitle={<span>Age: {tile.age}</span>}
              actionIcon={
                <div>
                  {/* <IconButton aria-label="Consumption" style={{color: "green"}}>
                      <LocalDrink/>
                  </IconButton> */}
                  <IconButton aria-label="Time" style={{color: "white"}}>
                      <AccessTime />
                       5 min
                  </IconButton>
                  <IconButton aria-label="Status" style={{color: "orange"}}>
                      <SentimentVeryDissatisfied />
                  </IconButton>
                </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

UserGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

export default withStyles(styles)(UserGridList);