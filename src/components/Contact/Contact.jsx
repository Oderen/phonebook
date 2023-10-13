import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact({ contacts, onDelete }) {
  return (
    <>
      {contacts
        .sort((a, b) => b.id - a.id)
        .map(({ _id, name, phone }, index) => (
          <li key={_id} className={css.contact}>
            <h3 className={css.contact__title}>Contact {index + 1}</h3>
            <div className={css['inner-block']}>
              <p className={css.contact__text}>
                <span style={{ fontWeight: 700, marginRight: 10 }}>Name: </span>
                {name}
              </p>
              <p className={css.contact__text}>
                <span style={{ fontWeight: 700, marginRight: 10 }}>Phone:</span>{' '}
                {phone}
              </p>
              <button
                className={css.contact__deleteButton}
                type="button"
                onClick={() => onDelete(_id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </>
  );
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
