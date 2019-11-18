import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength}) => (

    <div className={styles.formItem}>
    <Tag
      className={Tag === "textarea" ? styles.textarea : styles.input}
      type="text"
      name={name}
      id={uuid()}
      placeholder=" "
      maxLength={maxLength}
      required={!(name === "image")}
    />
    <label 
        className={styles.label} 
        htmlFor={name}
    >
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
)
Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired
}
Input.defaultProps = { 
    tag: 'input',
    maxLength: 200,
}

export default Input;