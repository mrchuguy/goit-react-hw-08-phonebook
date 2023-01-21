import { Box } from '../Box/Box';
import { NavigationLink } from './NavBar.styled';
import { useAuth } from '../../hooks/useAuth';

export const NavBar = () => {
  const { isLoggedIn } = useAuth(); 
  
    return (
       <Box>  
        <NavigationLink to="/">Home</NavigationLink>
        {isLoggedIn &&
        <NavigationLink to="/contacts">Phonebook</NavigationLink>}
      </Box>
  );
};
