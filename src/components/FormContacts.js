import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Label, SubmitBtn } from './FormContacts.styled';

export const FormContacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (data.find(item => item.name === name)) {
      toast.error(`${name} is already in contacts`);
    } else addContact({ name, phone });

    reset();
  };

  //===========================================
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <br />
        Name
        <input
          type="text"
          placeholder="Vinny Pooch"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          placeholder="+380800-00-00"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </Label>

      <SubmitBtn type="submit">Add contact</SubmitBtn>
      <ToastContainer />
    </Form>
  );
};
