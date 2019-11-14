import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const item = (item) => <ListItem key={item.name} {...item} /> 

const ListWrapper = ({items}) => (
    <ul className="listWrapper__wrapper">
        {items.map(item)}
    </ul>
);

export default ListWrapper;