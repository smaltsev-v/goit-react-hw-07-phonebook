import PropTypes from "prop-types";
import { useDeleteContactMutation } from '../../../redux/contacts/contact-slice';
import s from './ContactUser.module.css';
import { BiTrash } from "react-icons/bi";

function ContactUser({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  

  return (
    <li className={s.contactItem}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.phone}>{contact.number}</span>
      
      <BiTrash
        fill="red"
          type="button"
          onClick={() => deleteContact(contact.id)}>
        {isLoading ? 'Deleting...' : 'Delete'}
        </BiTrash>
     
    </li>
  );
}

export default ContactUser;

ContactUser.propTypes = {
  contact: PropTypes.object,
};
