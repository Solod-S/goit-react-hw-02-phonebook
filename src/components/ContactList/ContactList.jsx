import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { ContactsList, ListForContactsList } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      <ListForContactsList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        ))}
      </ListForContactsList>
    </ContactsList>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
