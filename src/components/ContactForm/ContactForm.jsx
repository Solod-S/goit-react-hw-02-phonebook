import React from 'react';
import shortid from 'shortid';
class ContactForm extends React.Component {
  state = { name: '', number: '' };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    // this.setState({ [name]: value });
    this.setState({ [name]: value });
  };
  handlleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleDataFromContactForm(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    return (
      <div className="ContactForm">
        <form onSubmit={this.handlleSubmit}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            id={nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={numberInputId}>Number</label>
          <input
            id={numberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
