import { useState } from 'react';
import {
  useUpdateContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApi';
import {
  FormBox,
  StyleUpdateForm,
  Input,
  Label,
  CloseButton,
  EditButton,
} from './UpdateForm.styled';
import { GrClose } from 'react-icons/gr';

export const UpdateForm = ({ id, toggleModal }) => {
  const { data } = useGetContactsQuery();
  const [editContact] = useUpdateContactMutation();

  const [name, setName] = useState(() => {
    const contact = data?.find(contact => contact.id === id);
    return contact?.name;
  });

  const [number, setNumber] = useState(() => {
    const contact = data?.find(contact => contact.id === id);
    return contact?.number;
  });

  const handleChange = event => {
    const contact = event.target;
    switch (contact.name) {
      case 'name':
        return setName(contact.value);
      case 'number':
        return setNumber(contact.value);
      default:
        return;
    }
  };

  const onEditContact = async event => {
    event.preventDefault();
    const value = { id, name, number };
    try {
      await editContact(value);
    } catch (error) {
      console.log(error);
    }
    toggleModal();
  };

  const onClose = () => {
    toggleModal();
  };

  return (
    <FormBox>
      <StyleUpdateForm onSubmit={onEditContact}>
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </Label>

        <EditButton type="submit">Update contact</EditButton>

        <CloseButton onClick={onClose}>
          <GrClose />
        </CloseButton>
      </StyleUpdateForm>
    </FormBox>
  );
};
