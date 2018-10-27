import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Timeline from '@material-ui/icons/Timeline';
import AccessTime from '@material-ui/icons/AccessTime';
import { SentimentVerySatisfied, SentimentSatisfied, SentimentDissatisfied, SentimentVeryDissatisfied } from '@material-ui/icons/';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  biggerTooltip : {
    fontSize: 18,
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
class UserGridList extends React.Component {
  state = {
    selected: false,
    selectedUser: {},
  };

  componentDidMount = () => {
    setInterval(() => this.refreshUI(), 500);
  };

  refreshUI() {
    if(this.state.selected) {
      this.props.data.map(user => {
        if(this.state.selectedUser.owner.id === user.owner.id) {
          console.log("UPDATE Values")
          this.handleSelectElememt(user);
        }
      });
    }
  }
  
  handleSelectElememt(e) {
    console.log(e);
    // console.log("hello");
    this.setState({ selected: true, selectedUser: e });
    this.props.handleClick(e);
  }

  handleSelectTime() {
    console.log("time clicked");
  }

  handleSelectStatus() {
    console.log("status clicked");
  }

  getSatisfiedState() {
    const user = this.state.selectedUser;
    const aggregate = user.drinks[user.drinks.length-1].aggregate;
    return (
      <IconButton aria-label="Status"onClick={this.handleSelectStatus}>
          {aggregate>=2000 && <SentimentVerySatisfied style={{color: "green"}}/>} 
          {aggregate>=1500 && aggregate<2000 && <SentimentSatisfied style={{color: "yellow"}}/>} 
          {aggregate>=1000 && aggregate<1500 && <SentimentDissatisfied style={{color: "orange"}}/>} 
          {aggregate<1000 && <SentimentVeryDissatisfied style={{color: "red"}}/>}
      </IconButton>
    );
  }

  getTimeSinceLastDrink(lastTime) {
    console.log(lastTime);
    var startDate = new Date(lastTime);
    // Do your operations
    var endDate   = new Date();
    var timeDiff = (endDate.getTime() - startDate.getTime()) / 1000;
    console.log(timeDiff);
    return timeDiff;
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">People</ListSubheader>
          </GridListTile>
          {this.props.data.map(user => (
            // <GridListTile key={user.owner.id} style={this.state.selected ? (this.state.selectedUser.owner.username === user.owner.username ? {borderStyle: "solid", borderColor: "green"} : {borderStyle: "none", borderColor: "none"}) : {borderStyle: "none", borderColor: "none"}}>
            //   <img src={user.owner.img} alt={user.owner.username} style={{top: "0", width: "200px", position: "initial", transform: "initial"}}/>
            <GridListTile key={user.owner.id} style={this.state.selected ? (this.state.selectedUser.owner.id === user.owner.id ? {borderStyle: "solid", borderColor: "green"} : {borderStyle: "none", borderColor: "none"}) : {borderStyle: "none", borderColor: "none"}}>
              <img src="images/peter.png" alt={user.owner.username} style={{top: "0", width: "200px", position: "initial", transform: "initial"}}/>
              <GridListTileBar
                title={user.owner.username}
                subtitle={<span>Age: {user.owner.age}</span>}
                actionIcon={
                  <div>
                    <Tooltip title="Show Chart" placement="top" leaveDelay={200} classes={{ tooltip: classes.biggerTooltip }}>
                      <IconButton aria-label="Show" style={this.state.selected ? (this.state.selectedUser.owner.id === user.owner.id ? {color: "green"} : {color: "white"}) : {color: "white"}} onClick={this.handleSelectElememt.bind(this, user)}>
                          <Timeline/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Last Drinking" placement="top" leaveDelay={200} classes={{ tooltip: classes.biggerTooltip }}>
                      <IconButton aria-label="Time" style={{color: "white"}} onClick={this.handleSelectTime}>
                          <AccessTime />
                          {((new Date().getTime() - new Date(user.drinks[user.drinks.length-1].createdDate).getTime()) / 60000).toFixed(0)} Min 
                      </IconButton>
                    </Tooltip>
                    {/* <IconButton aria-label="Status" onClick={this.handleSelectStatus}>
                        <SentimentVeryDissatisfied style={{color: "red"}}/>
                    </IconButton> */}
                    {/* {this.state.selected ? this.getSatisfiedState.bind(this, user) : <div></div>} */}
                    <Tooltip title={user.drinks[user.drinks.length-1].aggregate/1000+"L"} placement="top" leaveDelay={200} classes={{ tooltip: classes.biggerTooltip }}>
                      <IconButton aria-label="Status" onClick={this.handleSelectStatus}>
                        {user.drinks[user.drinks.length-1].aggregate>=2000 && <SentimentVerySatisfied style={{color: "green"}}/>} 
                        {user.drinks[user.drinks.length-1].aggregate>=1500 && user.drinks[user.drinks.length-1].aggregate<2000 && <SentimentSatisfied style={{color: "yellow"}}/>} 
                        {user.drinks[user.drinks.length-1].aggregate>=1000 && user.drinks[user.drinks.length-1].aggregate<1500 && <SentimentDissatisfied style={{color: "orange"}}/>} 
                        {user.drinks[user.drinks.length-1].aggregate<1000 && <SentimentVeryDissatisfied style={{color: "red"}}/>}
                      </IconButton>
                    </Tooltip>
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

UserGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(UserGridList);