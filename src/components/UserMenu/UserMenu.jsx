import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { Flex } from '@chakra-ui/react';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align = " center " justify = " center ">
      <h2 >Welcome, {user.name}</h2>
      <button className={css.link} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Flex>
  );
};