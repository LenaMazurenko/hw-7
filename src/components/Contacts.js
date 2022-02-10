import React from 'react';
import { useState } from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList';
import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrapper } from './Section.styled';

export const Contacts = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [filter, setFilter] = useState('');

  const findeContact = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h2>Contacts</h2>
      <Filter filterValue={filter} onFilter={e => setFilter(e.target.value)} />
      {isFetching && (
        <LoaderWrapper>
          <BallTriangle color="#00BFFF" height={80} width={80} />
        </LoaderWrapper>
      )}
      {contacts && (
        <ContactsList
          contacts={findeContact()}
          filter={filter}
          onDelete={deleteContact}
        />
      )}
    </>
  );
};
