import React, { Component } from "react";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import blue from "material-ui/colors/blue";
import CharactersList from "./CharactersList";


//import MarvelAPI from '../../services/MarvelAPI';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 3
    },
    tabs: {
        backgroundColor: blue[400],
    }
  });

class CharactersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            characters: {
                a: {
                    name: "a"
                },
                b: {
                    name: "b"
                }
            }
        };
    }


    handleChange = (event, tabIndex) => {
        this.setState({ tabIndex });
    };

    

    render() {
        const { classes } = this.props;
        const { tabIndex, characters } = this.state;
        return (
            <div className={classes.root} >
                <Tabs className={classes.tabs} value={tabIndex} onChange={this.handleChange}>
                    <Tab label="All" />
                    <Tab label="Favorites" />
                </Tabs>
                {tabIndex === 0 && 
                    <TabContainer>
                        <CharactersList data={{characters}} />
                    </TabContainer>}
                {tabIndex === 1 && 
                    <TabContainer>
                        <CharactersList data={{characters}} />
                    </TabContainer>}
            </div>
        );
    }
}
CharactersContainer.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CharactersContainer);
