import Contact from '../Contact';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.ContactList}>
      <Contact key={contacts.id} contacts={contacts} onDelete={onDelete} />
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
