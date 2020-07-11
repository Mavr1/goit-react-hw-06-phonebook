import React from 'react';
import { connect } from 'react-redux';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import Switches from './components/switch/Switch';
import { filterContacts } from './services/helpers';
import contactsActions from './redux/contacts/contactsActions';
import styles from './App.module.css';

const App = ({ contacts, filter, currentTheme, addContact, setFilter }) => (
  <div className={currentTheme === 'light' ? styles.AppLight : styles.AppDark}>
    <Switches />
    <h1>Phonebook</h1>
    <Section>
      <AddContactform addContact={addContact} />
    </Section>
    <Section name="Contacts">
      {contacts.length > 1 && <Filter onChange={setFilter} />}
      <Contacts
        contacts={
          contacts.filter !== '' ? filterContacts(contacts, filter) : contacts
        }
      />
    </Section>
  </div>
);

const mapStateToProps = (state) => ({
  contacts: state.contacts.list,
  filter: state.contacts.filter,
  currentTheme: state.theme.currentTheme,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(contactsActions.addContact(contact)),
  setFilter: (query) => dispatch(contactsActions.setFilter(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
