import { AuthLink } from './AuthMenu.styled';
import { Box } from '../Box/Box';

const navLinks = [
  { href: 'login', text: 'Login' },
  { href: 'register', text: 'Registration' },
];

export const AuthMenu = () => {
  return (
    <Box>
      {navLinks.map(({ href, text }) => (
        <AuthLink to={href} key={text} >
          {text}
        </AuthLink>
      ))}
    </Box>
  );
};