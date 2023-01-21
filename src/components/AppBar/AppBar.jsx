import { NavBar } from '../NavBar/NavBar';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { useAuth } from '../../hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavBar />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};