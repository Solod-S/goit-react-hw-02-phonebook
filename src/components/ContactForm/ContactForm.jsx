import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContactsForm,
  ListForContactsForm,
  ItemsForContactsForm,
  LabelForContactsForm,
  InputForContactsForm,
  ButtonForContactsForm,
  ErrorForContactsForm,
} from './ContactForm.styled';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
let schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'That doesnt look like your name')
    .typeError()
    .required(),
  number: yup
    .string()
    .required('required')
    .matches(phoneRegExp, 'That doesnt look like a phone number')
    .min(3)
    .max(15),
});
class ContactForm extends React.Component {
  state = { name: '', number: '' };

  handleSubmit = (values, actions) => {
    this.props.handleDataFromContactForm(values);
    // console.log(`values`, values);
    // console.log(`actions`, actions);
    actions.resetForm();
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
    const { state, handleSubmit } = this;
    return (
      <Formik
        validationSchema={schema}
        initialValues={state}
        onSubmit={handleSubmit}
      >
        <ContactsForm autoComplete="off">
          <ListForContactsForm>
            <ItemsForContactsForm>
              <LabelForContactsForm htmlFor={nameInputId}>
                Name
              </LabelForContactsForm>

              <InputForContactsForm
                id={nameInputId}
                type="text"
                name="name"
                required
              />
              <ErrorForContactsForm name="name" component="div" />
            </ItemsForContactsForm>
            <ItemsForContactsForm>
              <LabelForContactsForm htmlFor={numberInputId}>
                Number
              </LabelForContactsForm>
              <InputForContactsForm
                id={numberInputId}
                type="tel"
                name="number"
                required
              />
              <ErrorForContactsForm name="number" component="div" />
            </ItemsForContactsForm>
          </ListForContactsForm>
          <ButtonForContactsForm type="submit">
            Add contact
          </ButtonForContactsForm>
        </ContactsForm>
      </Formik>
    );
  }
}
ContactForm.propTypes = {
  handleDataFromContactForm: PropTypes.func.isRequired,
};
export default ContactForm;
