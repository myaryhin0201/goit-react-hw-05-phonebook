import { combineReducers } from 'redux';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56699' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12699' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79151' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-2612' },
];

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case ADD: {
      return [payload, ...state];
    }
    case DELETE: {
      return state.filter(({ id }) => id !== payload);
    }
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
      return payload;
    }
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: items,
  filter: filter,
});

export default contactsReducer;
