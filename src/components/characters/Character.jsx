import React from 'react';
//import {List, ListItem } from 'material-ui/List';

const Character = (props) => {
    const { name, imgUri } = props;
    return (
        <div>
            <h2>{ name }</h2>
        </div>
    )
}
 
export default Character;