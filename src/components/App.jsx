import { FormContacts } from './FormContacts';
import { Contacts } from './Contacts';
import { Wrapper } from './Section';

export const App = () => {
  return (
    <Wrapper>
      <FormContacts />
      <Contacts />
    </Wrapper>
  );
};
