import { Label, Input } from './Filter.styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/authSelectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={filterContact}
        placeholder="Enter filter"
      />
    </Label>
  );
};
