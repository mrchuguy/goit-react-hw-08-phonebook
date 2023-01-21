import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { ListItem } from '../ListItem/ListItem'
import { ContactList} from './List.styled';
import { Loader } from 'components/Loader/Loader';

export const List = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const { isLoading } = useGetContactsQuery();

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <>
    <ContactList>
      {isLoading ? <Loader/> :
        (visibleContact.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })
      ) }
        </ContactList>
      </>
  )
};
