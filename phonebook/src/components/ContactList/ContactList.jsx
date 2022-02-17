
import { Puff } from 'react-loading-icons'
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import ContactUser from "./ContactUser";

function ContactList({ contacts, isFetching }) {
  return (
    <>
    {isFetching ? (
        <Puff />
      ) : (
    <ul className={s.list}>
      {contacts && contacts.map(contact => <ContactUser key={contact.id} contact={contact} />)}
    </ul>
    )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default ContactList;
