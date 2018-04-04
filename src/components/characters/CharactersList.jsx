import React from 'react';
import List, { ListItem } from "material-ui/List";
import Character from "./Character";
import PropTypes from 'prop-types';


const CharactersList = (data) => {
    const renderChildren = children => {
        return Object.values(children).map((child, index) => {
            console.log(child);
            return (
                <ListItem
                    key={index}
                >
                    <Character
                        //id={child.id}
                        name={child.name}
                    />
                </ListItem>
            );
        });
    }
    return (
        <List>
            { renderChildren(data) }
        </List>
    )
}

CharactersList.PropTypes = {
    data: PropTypes.object.isRequired
}
export default CharactersList;