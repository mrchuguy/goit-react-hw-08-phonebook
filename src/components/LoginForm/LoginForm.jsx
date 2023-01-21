import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authOperations';
import { Box } from '../../components/Box/Box';
import { Label, Input, Button, Link } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
        <Input name="email" type="email" id="email" />
      </Label>
      <Label>
        {' '}
        Password
        <Input name="password" type="password" id="password" />
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
