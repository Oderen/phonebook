import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es';
import { selectContacts } from '../../redux/selectors';
import { ImUser } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';
import Notiflix from 'notiflix';
import style from './ContactForm.module.css';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const ContactForm = ({ sendDataToApp }) => {
  const contacts = useSelector(selectContacts);

  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    if (onDuplicateCheck(name.value)) {
      e.currentTarget.reset();
      Notiflix.Notify.failure(`${name.value} is already in contacts`);
      return;
    }

    sendDataToApp({ name: name.value, phone: number.value });
    reset();
  };

  const onDuplicateCheck = name => {
    const newContactName = name.toLowerCase();

    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactsForm} onSubmit={onSubmit}>
      <div className={style.contactsForm__field}>
        <label className={style.contactsFrom__label}>
          Name
          <input
            className={style.contactsForm__input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Z\s]+$"
            placeholder="Rosie Simpson"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
          <ImUser className={style.contactsForm__svg} />
        </label>
      </div>
      <div className={style.contactsForm__field}>
        <label className={style.contactsFrom__label}>
          Number
          <input
            className={style.contactsForm__input}
            type="tel"
            name="number"
            value={number}
            pattern="^[+]?[0-9\s]+$"
            placeholder="+123 456 789"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
          />
          <ImPhone className={style.contactsForm__svg} />
        </label>
      </div>
      <button className={style.contacts__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  sendDataToApp: PropTypes.func.isRequired,
};
