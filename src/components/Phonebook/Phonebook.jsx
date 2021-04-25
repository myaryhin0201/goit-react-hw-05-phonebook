import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm/';
import Filter from '../Filter';

const Phonebook = () => {
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('contacts'));
  //   setContacts(data);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     'contacts',
  //     contacts !== null ? JSON.stringify(contacts) : '',
  //   );
  // }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default Phonebook;
