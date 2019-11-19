import React from 'react';
import PropTypes from 'prop-types';
import Title from "../../Title/Title";
import Button from "../../Button/Button";
import styles from "./ListItem.module.scss";
import uuid from 'react-uuid';

const ListItem = ({ title, image, description, link }) => {

    const ImageTag = image ? 'img' : 'div';

    return (
        <li 
            key={uuid()} 
            className={styles.wrapper}    
        >
        {image && <ImageTag 
            className={image ? styles.image : styles.imageNone} 
            src={image} 
            alt="avatar"
        />}
        <div 
            className={styles.listItem_content}
        >
            <Title>{title}</Title>
            <p 
                className={styles.description}
            >
                {description}
            </p>
            { link && <Button href={link}> visit twitter page  </Button>}
        </div>
    </li>
    )
};

  ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string
  };

  ListItem.defaultProps = {
    image: 'https://cdn2.vectorstock.com/i/thumb-large/52/46/avatar-user-icon-vector-21105246.jpg',
    link: '#'
  };

export default ListItem;