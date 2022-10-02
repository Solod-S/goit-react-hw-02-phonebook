import React from 'react';
// import shortid from 'shortid';
class ContactList extends React.Component {
  state = {};

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <div className="ContactList">
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
