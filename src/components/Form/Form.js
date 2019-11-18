import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input
        name="name"
        label="Name"
        required
        maxLength={30}
      />
      <Input
        name="link"
        label="Twitter link"
      />
      <Input
        name="image"
        label="Image"
      />
      <Input
        tag="textarea"
        name="description"
        label="Description"
        required
      />
      <Button>add new item</Button>
    </form>
  </div>
);

export default Form;
