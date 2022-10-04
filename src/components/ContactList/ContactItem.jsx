import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemsForContactsItem,
  NameForContactsItem,
  NamberForContactsItem,
  ButtonForContactsItem,
} from './ContactItem.styled';
const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <ItemsForContactsItem>
      <NameForContactsItem>{name}</NameForContactsItem>
      <NamberForContactsItem>{number}</NamberForContactsItem>
      <ButtonForContactsItem type="button" onClick={onDeleteContact}>
        Delete
      </ButtonForContactsItem>
    </ItemsForContactsItem>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
