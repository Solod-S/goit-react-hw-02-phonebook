import React from 'react';
import shortid from 'shortid';
import {
  ContactFilter,
  InputForContactFilter,
  LabelForContactFilter,
} from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const filterInputId = shortid.generate();
  return (
    <ContactFilter>
      <LabelForContactFilter htmlFor={filterInputId}>
        Find contacts by name
      </LabelForContactFilter>
      <InputForContactFilter
        id={filterInputId}
        type="text"
        value={value}
        onChange={onChange}
      ></InputForContactFilter>
    </ContactFilter>
  );
};
export default Filter;
