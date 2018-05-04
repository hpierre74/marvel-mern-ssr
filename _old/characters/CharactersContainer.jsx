import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import blue from "material-ui/colors/blue";
import { CircularProgress } from "material-ui/Progress";
import { withStyles } from "material-ui/styles";

import CharactersList from "./CharactersList";

import MarvelAPI from "../../services/MarvelAPI";

function TabContainer(props) {
  return (
    <Paper elevation={4}>
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    </Paper>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "50%",
    margin: "0 auto",
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center'
  },
  tabs: {
    backgroundColor: blue[400]
  },
  loader: {
  }
});

class CharactersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      characters: []
    };
  }

  componentDidMount() {
    return this.state.characters.length > 0
      ? () => {
          return;
        }
      : this.setCharactersData();
  }

  setCharactersData() {
    return MarvelAPI.getEntity("characters")
      .then(response => {
        return this.setState({ characters: response.data.data.results });
      })
      .catch(err => {
        return alert(err);
      });
  }

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const { classes } = this.props;
    const { tabIndex, characters } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          className={classes.tabs}
          value={tabIndex}
          onChange={this.handleChange}
        >
          <Tab label="All" />
          <Tab label="Favorites" />
        </Tabs>
        {tabIndex === 0 && (
          <TabContainer>
            {characters.length > 0 ? (
              <CharactersList data={{ characters }} />
            ) : (
              <CircularProgress className={classes.loader} />
            )}
          </TabContainer>
        )}
        {tabIndex === 1 && (
          <TabContainer>
            {characters.length > 0 ? (
              <CharactersList data={{ characters }} />
            ) : (
              <CircularProgress className={classes.loader} />
            )}
          </TabContainer>
        )}
      </div>
    );
  }
}
CharactersContainer.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CharactersContainer);
