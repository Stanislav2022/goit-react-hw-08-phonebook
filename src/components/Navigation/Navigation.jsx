import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Text, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex>
      <NavLink to="/">
        <Text variant = 'nav' >Home</Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
        <Text variant = 'nav' >Contacts</Text>
        </NavLink>
      )}
    </Flex>      
  );
};
