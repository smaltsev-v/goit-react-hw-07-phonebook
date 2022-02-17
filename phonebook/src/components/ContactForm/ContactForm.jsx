import PropTypes from 'prop-types';
import { useCreateContactMutation } from '../../redux/contacts/contact-slice';
import {FaAddressBook} from 'react-icons/fa';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css'


function ContactForm({ contacts }) {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const contactsName = contacts.map(contact => contact.name);

    if (contactsName.includes(name)) {
      return toast.error('This contact already exists');
    }

    createContact({ name, number });
    toast.success('Adding  successfully');

    e.currentTarget.reset();
  };


  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.labelForm}>
        Name{" "}
        <input
          className={s.input}
          type="text"
          name="name"
         
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.labelForm}>
        Number{" "}
        <input
          className={s.input}
          type="tel"
          name="number"
         
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button
      className={s.btnAddContact} 
      type="submit"><FaAddressBook  fill='blue'/>
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  contacts: PropTypes.array,
};


export default ContactForm;