import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Flex, FormLabel, FormControl } from '@chakra-ui/react'
import AlertStatusError from 'components/AlertStatus/AlertStatusError';
import { useToast } from "@chakra-ui/react"
import { useEffect } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useAuth();
  const toast = useToast()


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


  useEffect(() => {
    if (error && isLoading) {
      toast({
              title: 'Error.',
              description: "Check the correctness of the entered data.",
              status: 'error',
              duration: 4000,
              isClosable: true,
            })
    }
        }, [error]);

  return (
    <Flex p='8' justify='center' direction='column' align='center'>
    <form onSubmit={handleSubmit} >
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
      </Flex>
  );
};
