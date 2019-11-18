import React from 'react';
import uuid from 'react-uuid'
import ListItem from './ListItem/ListItem';
import styles from './List.module.scss';

const item = (item) => <ListItem key={uuid()} {...item} /> 

const List = ({items}) => (
    <ul className={styles.listWrapper}>
        {items.map(item)}
    </ul>
);

export default List;