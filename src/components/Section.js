import React from 'react';
import { Section } from './Section.styled';

export const Wrapper = ({ children }) => {
  return (
    <Section>
      <h1>Phonebook </h1>
      {children}
    </Section>
  );
};
