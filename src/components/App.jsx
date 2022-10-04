import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AppHeader,
  MainAppHeader,
  AppSection,
  AppImgLeft,
  AppImgRigth,
} from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import image from '../img/left.png';
import image2 from '../img/right.png';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Mark Zuckerberg', number: '777-77-77' },
      { id: 'id-2', name: 'Bill Gates', number: '888-99-99' },
      { id: 'id-3', name: 'Elon Musk', number: '666-66-66' },
      { id: 'id-4', name: 'Boris Johnson', number: '222-22-22' },
    ],
    filter: '',
  };
  notify = toShown => {
    if (toShown === 'addContact') {
      return toast.success(' You have added contact!', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
    if (toShown === 'dellContact') {
      return toast.warn('You have dellated the contact!', {
        position: 'bottom-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };
  creatingContact = data => {
    const namesInContacts = this.state.contacts.map(contact => contact.name);
    if (namesInContacts.includes(data.name)) {
      alert(` ${data.name} is already in contacts`);
      // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
    } else {
      this.notify('addContact');
      return this.setState({
        ...this.state,
        // распыливаем все стейты которые были
        contacts: [
          ...this.state.contacts,
          // распыливаем все предведущии контакты
          { id: shortid.generate(), name: data.name, number: data.number },
          // + добавляем новый
        ],
      });
    }
  };
  getContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onChangeFilter = event => {
    // console.log(event.currentTarget.value);
    this.setState({ filter: event.currentTarget.value });
  };
  deleteContact = ContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== ContactId),
    }));
    this.notify('dellContact');
  };
  render() {
    const { filter } = this.state;
    const contactsToShow = this.getContacts();
    return (
      <>
        <AppImgLeft src={image} />
        <AppSection>
          <MainAppHeader>Phonebook</MainAppHeader>
          <ContactForm creatingContact={this.creatingContact} />
          <AppHeader>Contacts</AppHeader>
          <Filter value={filter} onChange={this.onChangeFilter} />
          <ContactList
            contacts={contactsToShow}
            onDeleteContact={this.deleteContact}
          />
        </AppSection>
        <AppImgRigth src={image2} />
      </>
    );
  }
}
export default App;
