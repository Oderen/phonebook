import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { fetchContacts, deleteContact, addContact } from 'redux/ApiOperations';
import {
  selectContacts,
  selectFilterQuery,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors';

import Loader from '../../components/Loader';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';

import css from './PhonebookPage.module.css';

const PhonebookPage = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilterQuery);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch]);

  const formOnSubmit = newContact => {
    dispatch(addContact(newContact));
  };

  const changeFilter = e => {
    const query = e.currentTarget.value;

    dispatch({ type: 'filter/filter', payload: query });
  };

  const deleteContactById = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normalizedFilter = filterQuery.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <section className={css.contatcs}>
      <div className="container">
        <h1 className={css.contacts__title}>Phonebook</h1>
        <ContactForm sendDataToApp={formOnSubmit} />
        {isError && <h1>Ops, something went wrong</h1>}
        {isLoading && <Loader />}

        {contacts.length > 0 && !isError && !isLoading && (
          <div className={css.contacts}>
            <h2 className={css.contacts__title}>Contacts</h2>
            <Filter changeFilter={changeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDelete={deleteContactById}
            />
          </div>
        )}

        {!isLoading && contacts.length < 1 && !isError && (
          <div className={css.contacts}>
            <h2 className={css.contacts__title}>Contacts</h2>
            <div className={css.noContacts}>
              <p className={css.noContacts__text}>There are no contacts yet</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhonebookPage;
