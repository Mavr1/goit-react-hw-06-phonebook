import React from 'react';
import Input from '../input/Input';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const Filter = ({ setFilter }) => (
  <Input label="Find contacts by name" onChange={setFilter} name="filter" />
);

const mapDispatchToProps = (dispatch) => ({
  setFilter: (query) => dispatch(contactsActions.setFilter(query)),
});

export default connect(null, mapDispatchToProps)(Filter);
