import { useState } from 'react';
import { useFetchContactQuery } from './redux/contacts/contact-slice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const { data, isFetching } = useFetchContactQuery();

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts =
    data && data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <div className="container" >
      <h1 className="title__h"><span className='title__p'>Phone</span>book</h1>
      <ContactForm contacts={data} />
      <h2 className="title__contact">Contacts</h2>
      <Filter  value={filter} onChange={changeFilter} />
      <h2 className="title__contact">Number of contacts: {data && data.length}</h2>
      {data && data.length ? (
      <ContactList contacts={visibleContacts} isFetching={isFetching} />
      ):(
        <h2>Phonebook is empty. You can add contacts.</h2>
        )}
      <ToastContainer
        autoClose={3700}
      />
    </div>
  );
}

export default App;
