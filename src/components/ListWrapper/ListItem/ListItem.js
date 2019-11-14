import React from 'react';
import './ListItem.css';

const ListItem = ({ name, image, description }) => (
    <li key={name} className="listItem__wrapper">
        <img className="listItem__image" src={image} alt="avatar" />
        <div className="listItem_content">
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>

);

export default ListItem;