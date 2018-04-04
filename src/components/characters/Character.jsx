import React from 'react';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    avatar: {
        margin: 10
    }
});

const Character = (props) => {
    const { character, classes } = props;
    return (
        <ListItem>
            <Avatar 
                className={classes.avatar}
                alt={character.name} 
                src={character.thumbnail.path+'.'+character.thumbnail.extension}
            />
            <ListItemText primary={ character.name } />
            <ListItemSecondaryAction>
                <IconButton>
                    <Icon>star</Icon>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

Character.PropTypes = {
    character: PropTypes.object.isRequired
}

export default withStyles(styles)(Character);