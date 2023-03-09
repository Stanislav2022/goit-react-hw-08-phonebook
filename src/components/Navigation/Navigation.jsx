import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuht'


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>      
  );
};
