import { Box } from '../../components/Box/Box';
import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { List } from '../../components/List/List';

export default function PhoneBook() {
  return (
      <Box mx='auto' maxWidth={500} >
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <List />
      </Box>
  );
};


