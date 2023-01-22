import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';
import { Box } from '../../components/Box/Box';
import { Label, Input, Button, Link } from './RegisterForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPass(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      maxWidth={400}
      mx="auto"
      mt="20px"
    >
      <Label>
        {' '}
        Name
        <Input
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        {' '}
        Email
        <Input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        {' '}
        Password
        <Input
          name="password"
          type="password"
          id="password"
          value={pass}
          onChange={handleChange}
        />
      </Label>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button type="submit">Sign Up</Button>
        <Link href="/goit-react-hw-08-phonebook/login">
          Already have an account? Sign in
        </Link>
      </Box>
    </Box>
  );
};
