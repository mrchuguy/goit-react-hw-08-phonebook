import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';
import { Box } from '../../components/Box/Box';
import { Label, Input, Button, Link } from './LoginForm.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPass(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
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
      autoComplete="off"
      display="flex"
      flexDirection="column"
      maxWidth={400}
      mx="auto"
      mt="20px"
    >
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
        <Button type="submit">Sign In</Button>
        <Link href="/goit-react-hw-08-phonebook/register">
          Don't have an account? Sign Up
        </Link>
      </Box>
    </Box>
  );
};
