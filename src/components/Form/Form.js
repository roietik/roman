import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import styles from "./Form.module.scss";

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note'
}

const description = {
  twitter: 'favorite Twitter accounts',
  article: 'Article',
  note: 'Note '
}

class Form extends React.Component {

  state = {
    activeOptions: types.twitter
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOptions: type
    })

  }

  render() {
    const { submitFn } = this.props;
    const {activeOptions} = this.state;
    return (
      <div className={styles.wrapper}>
        <Title>Add new {description[activeOptions]}</Title>
        <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
          <div className={styles.radioWrapper}>
            <Radio
              id={types.twitter}
              checked={activeOptions === types.twitter}
              changeFn={() => this.handleRadioButtonChange(types.twitter)}
            >
              Twitter
            </Radio>
            <Radio
              id={types.article}
              checked={activeOptions === types.article}
              changeFn={() => this.handleRadioButtonChange(types.article)}
            >
              Article
            </Radio>
            <Radio
              id={types.note}
              checked={activeOptions === types.note}
              changeFn={() => this.handleRadioButtonChange(types.note)}
            >
              Note
            </Radio>
          </div>
          <Input name="name" label={activeOptions === types.twitter ? 'Twitter Name' : 'Title'} required maxLength={30} />
          {activeOptions !== types.note ? <Input name="link" label={activeOptions === types.twitter ? 'Twitter Link' : 'Link'} /> : null}
          {activeOptions === types.twitter ? <Input name="image" label="Image"/> : null}
          <Input tag="textarea" name="description" label="Description" required />
          <Button>add new item</Button>
        </form>
      </div>
    )
  }
}

export default Form;
