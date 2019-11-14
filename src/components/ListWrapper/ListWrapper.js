import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts'

const item = (item) => {
    return (
        <ListItem
            key={item.name}
            name={item.name}
            image={item.image}
            description={item.description}
        />
    )
}

const ListWrapper = () => (
    <ul className="listWrapper">
        {
            twitterAccounts.map(item)
        }
    </ul>
)

export default ListWrapper;
