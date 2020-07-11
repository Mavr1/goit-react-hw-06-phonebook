import React from 'react';
import Button from '../button/Button';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';

const ContactItem = ({ name, number, deleteContact }) => (
  <li>
    <span className="contactName">{name}</span>
    <span className="contactNumber">{number}</span>
    <Button name="Delete" clsn="btnDelete" onClick={deleteContact} />
  </li>
);

const mapStateToProps = (state, { id }) => {
  const { list } = state.contacts;
  const contact = list.find((item) => item.id === id);
  return contact;
};

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteContact: () => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
