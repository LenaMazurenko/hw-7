import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Btn } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(item => (
        <Item key={item.id}>
          <p>
            &#9742; -- {item.name}- {item.phone}
          </p>
          <Btn onClick={() => onDelete(item.id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
