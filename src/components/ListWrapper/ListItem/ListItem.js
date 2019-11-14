import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ name, image, description, twitterLink }) => (
    <li key={name} className="listItem__wrapper">
        <img className="listItem__image" src={image} alt="avatar" />
        <div className="listItem_content">
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a rel="noopener noreferrer" target="_blank" href={twitterLink} className="listItem__button">visit twitter page</a>
        </div>
    </li>
);

  ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired
  };

  ListItem.defaultProps = {
    name: 'Stranger',
    image: 'https://cdn2.vectorstock.com/i/thumb-large/52/46/avatar-user-icon-vector-21105246.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    twitterLink: 'https://twitter.com/home'
  };

export default ListItem;