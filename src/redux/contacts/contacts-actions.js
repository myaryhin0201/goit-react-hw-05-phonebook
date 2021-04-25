import shortid from 'shortid';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';
const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});
const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});
const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
