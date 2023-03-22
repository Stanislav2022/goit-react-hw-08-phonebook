import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Flex, FormLabel, FormControl, useToast, Spinner } from '@chakra-ui/react'
import { useEffect, useRef } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useAuth();
  const toast = useToast()

const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current && error) {
        toast({
          title: 'Login error',
          description: "Check your login or password.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
   }, [error, toast])

  useEffect(() => {
    isMounted.current = true
  }, [])



  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex p='8' justify='center' direction='column' align='center'>
      <form onSubmit={handleSubmit}>
        <FormControl pb='3'>
          <FormLabel>Email</FormLabel>
          <Input placeholder='Email' type="email" name="email" />
        </FormControl>
        <FormControl pb='3'></FormControl>
        <FormControl pb='3'>
          <FormLabel>Password</FormLabel>
          <Input placeholder='Password' type="password" name="password" />
        </FormControl>

        <Button type="submit">Log In</Button>
      </form>
      {isLoading && <Spinner />}
    </Flex>
  );
};
