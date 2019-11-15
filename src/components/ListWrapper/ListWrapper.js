import React from 'react';
import uuid from 'react-uuid'
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const item = (item) => <ListItem key={uuid()} {...item} /> 

const ListWrapper = ({items}) => (
    <ul className="listWrapper__wrapper">
        {items.map(item)}
    </ul>
);

export default ListWrapper;