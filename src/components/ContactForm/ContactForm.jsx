import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from '../../redux/contacts/operations';
import Notiflix from 'notiflix';
import { selectContacts } from '../../redux/contacts/selectors';
import { nanoid } from 'nanoid';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '10px',
  opacity: 1,
});

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!isFormValid()) {
      Notiflix.Notify.failure("Please fill in both name and number fields!");
      return;
    }

    const newContact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    handleAddContacts(newContact);
    setFormData({ name: '', number: '' });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddContacts = newContact => {
    const existingContactByName = contacts.find(contact => contact.name === newContact.name);
    const existingContactByNumber = contacts.find(contact => contact.number === newContact.number);

    if (existingContactByName) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts!`);
    } else if (existingContactByNumber) {
      Notiflix.Notify.failure(`Number ${newContact.number} is already in contacts!`);
    } else {
      dispatch(addContacts({ name: newContact.name, number: newContact.number }));
      Notiflix.Notify.success(`${newContact.name} has been added to contacts!`);
    }
  };

  const isFormValid = () => {
    const { name, number } = formData;
    return name.trim() !== '' && number.trim() !== '';
  };

  const { name, number } = formData;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}> Name:
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder='Name'
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.labelPhone}> Number:
        <input
          className={styles.formInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder='Phone number'
          pattern="\+?\d{1,4}?[[\-.\s]]?\(?\d{1,3}?\)?[[\-.\s]]?\d{1,4}[[\-.\s]]?\d{1,4}[[\-.\s]]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.btnSubmit} disabled={!isFormValid()}>Add contact</button>
    </form>
  );
}

export default ContactForm;
