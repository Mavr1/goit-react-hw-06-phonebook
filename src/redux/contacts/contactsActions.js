import actionTypes from '../actionTypes';

const addContact = (contact) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    contact,
  },
});

const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});

const setFilter = (event) => ({
  type: actionTypes.FILTER_CONTACTS,
  payload: {
    filter: event.target.value,
  },
});

export default { addContact, deleteContact, setFilter };
