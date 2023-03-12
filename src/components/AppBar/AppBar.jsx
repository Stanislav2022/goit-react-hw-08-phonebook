import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './AppBar.module.css';
import { Box } from "@chakra-ui/react"

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
      <Box  boxShadow='dark-lg' rounded='md' bg='white' >

  
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      </Box>
  );
};
