import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filterValue, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="find"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
};
