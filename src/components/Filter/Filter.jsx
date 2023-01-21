import { Label, Input } from './Filter.styles';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContact = event => dispatch(changeFilter(event.target.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={filterContact} placeholder="Enter filter" />
    </Label>
  );
};
