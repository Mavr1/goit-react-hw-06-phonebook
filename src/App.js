import React from 'react';
import { connect } from 'react-redux';
import Section from './components/section/Section';
import AddContactform from './components/addContactform/AddContactform';
import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import Switches from './components/switch/Switch';
import { filterContacts } from './services/helpers';
import styles from './App.module.css';

const App = ({ contacts, filter, currentTheme }) => (
  <div className={currentTheme === 'light' ? styles.AppLight : styles.AppDark}>
    <Switches />
    <h1>Phonebook</h1>
    <Section>
      <AddContactform />
    </Section>
    <Section name="Contacts">
      {contacts.length > 1 && <Filter />}
      <Contacts
        contacts={filter !== '' ? filterContacts(contacts, filter) : contacts}
      />
    </Section>
  </div>
);

const mapStateToProps = ({ contacts, theme }) => ({
  contacts: contacts.list,
  filter: contacts.filter,
  currentTheme: theme.currentTheme,
});

export default connect(mapStateToProps)(App);
