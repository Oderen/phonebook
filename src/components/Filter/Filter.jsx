import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es';

import css from './Filter.module.css';
import { ImSearch } from 'react-icons/im';

const Filter = ({ changeFilter }) => {
  const filterQuery = useSelector(state => state.filter);
  return (
    <div className={css.contactsForm__field}>
      <label className={css.findContacts__label}>
        Find contacts by name
        <input
          className={css.findContacts__input}
          type="text"
          name="filter"
          value={filterQuery}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={changeFilter}
          required
        />
        <ImSearch className={css.findContacts__icon} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
