import React from 'react';
import uuid from 'react-uuid'
import ListItem from './ListItem/ListItem';
import Title from '../Title/Title';
import styles from './List.module.scss';

const item = (item) => <ListItem key={uuid()} {...item} />

const List = ({ items }) => (
    <>
        {items.length ? (
            <ul className={styles.listWrapper}>
                {items.map(item)}
            </ul>
        ) : (
                <Title SectionDesc>Nothing to render right now</Title>
            )}
    </>
);

export default List;