import React from "react";
import AppContext from '../../context';
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
    type: types.twitter,
    title: '',
    link: '',
    image: '',
    description: ''
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type
    })
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {description[type]}</Title>
            <form autoComplete="off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
              <div className={styles.radioWrapper}>
                <Radio
                  id={types.twitter}
                  checked={type === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </Radio>
                <Radio
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </Radio>
                <Radio
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </Radio>
              </div>
              <Input 
                value={this.state.title}
                onChange={this.handleInputChange} 
                name="title" label={type === types.twitter ? 'Twitter Name' : 'Title'} 
                required 
                maxLength={30}
              />
              {type !== types.note ? 
                <Input 
                  value={this.state.link}
                  onChange={this.handleInputChange} 
                  name="link" 
                  label={type === types.twitter ? 'Twitter Link' : 'Link'} 
                /> 
              : null}
              {type === types.twitter ? 
                <Input 
                  value={this.state.image}
                  onChange={this.handleInputChange}t 
                  name="image" 
                  label="Image" 
                /> 
              : null}
              <Input 
                value={this.state.description}
                onChange={this.handleInputChange} 
                tag="textarea" 
                name="description" 
                label="Description" 
                required 
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>

    )
  }
}

export default Form;
