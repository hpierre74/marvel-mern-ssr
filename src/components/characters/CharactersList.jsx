import React from 'react';
import List from "material-ui/List";
import Character from "./Character";
import PropTypes from 'prop-types';


const CharactersList = (data) => {
    const renderChildren = children => {
         return Object.values(children).map((child, index) => {
            return (
                <Character character={child} key={index} />
            );
        });
    }
    return (
        <List>
            { renderChildren(data.data.characters) }
        </List>
    )
}

CharactersList.PropTypes = {
    data: PropTypes.object.isRequired
}
export default CharactersList;