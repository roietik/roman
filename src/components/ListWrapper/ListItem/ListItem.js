import React from 'react';
import './ListItem.css';
import { twitterAccounts } from '../../../data/twitterAccounts'

const ListItem = () => (
    <>
        {
            twitterAccounts.map(
                item => {
                    return (
                        <li key={item.name} className="listItem__wrapper">
                            <img className="listItem__image" src={item.image} alt="dan" />
                            <div className="listItem_content">
                                <h2 className="listItem__name">{item.name}</h2>
                                <p className="listItem__description">{item.description}</p>
                                <button className="listItem__button">visit twitter page</button>
                            </div>
                        </li>

                    )
                }

            )
        }
    </>
);

export default ListItem;