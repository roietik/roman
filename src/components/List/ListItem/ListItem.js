import React from 'react';
import PropTypes from 'prop-types';
import Title from "../../Title/Title";
import styles from "./ListItem.module.scss";
import uuid from 'react-uuid';

const ListItem = ({ name, image, description, twitterLink }) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li 
        key={uuid()} 
        className={styles.wrapper}    
    >
        <ImageTag 
            className={image ? styles.image : styles.imageNone} 
            src={image} 
            alt="avatar"
        />
        <div 
            className={styles.listItem_content}
        >
            <Title>{name}</Title>
            <p 
                className={styles.description}
            >
                {description}
            </p>
            <a 
                rel="noopener noreferrer" 
                target="_blank" 
                href={twitterLink} 
                className={styles.button}
            >
                visit twitter page
            </a>
        </div>
    </li>
    )
};

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