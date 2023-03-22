import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Text, Button} from '@chakra-ui/react';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align = " center " justify = " center ">
      <Text >Welcome, {user.name}</Text >
      <Button  type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};