import React from 'react';
import {
  ContactsList,
  ButtonForContactsList,
  ListForContactsList,
  ItemsForContactsList,
  NameForContactsList,
  NamberForContactsList,
} from './ContactList.styled';
class ContactList extends React.Component {
  state = {};

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ContactsList>
        <ListForContactsList>
          {contacts.map(({ id, name, number }) => (
            <ItemsForContactsList key={id}>
              <NameForContactsList>{name}</NameForContactsList>
              <NamberForContactsList>{number}</NamberForContactsList>
              <ButtonForContactsList
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </ButtonForContactsList>
            </ItemsForContactsList>
          ))}
        </ListForContactsList>
      </ContactsList>
    );
  }
}

export default ContactList;
