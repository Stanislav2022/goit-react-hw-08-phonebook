import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex>
      <NavLink  to="/register">
       <Text variant = 'nav' >Register</Text> 
      </NavLink>
      <NavLink  to="/login">
        <Text >Log In</Text>
      </NavLink>
    </Flex>
  );
};