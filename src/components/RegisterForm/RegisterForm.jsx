import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Flex, FormLabel, FormControl, useToast, Spinner } from '@chakra-ui/react'

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useAuth();
  const toast = useToast()

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current && error) {
        toast({
          title: 'Registration error',
          description: "Maybe such a user already exists.",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
   }, [error, toast])

  useEffect(() => {
    isMounted.current = true
  }, [])



  const handleSubmit = e => {
    e.preventDefault();
     const form = e.target;
    console.log(e.target.elements.name.value);
    dispatch(
      register({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex p='8' justify='center'>
      <form onSubmit={handleSubmit}>
        <FormControl pb='3'>
          <FormLabel>Name</FormLabel>
            <Input placeholder='Name' type="text" name="name" />
        </FormControl>
        <FormControl pb='3'>
          <FormLabel>Email</FormLabel>
          <Input placeholder='Email' type="email" name="email" />
        </FormControl>
        <FormControl pb='3'></FormControl>
        <FormControl pb='3'>
          <FormLabel>Password</FormLabel>
          <Input placeholder='Password' type="password" name="password" />
        </FormControl>
        <Button type="submit">Register</Button>
      </form>
      {isLoading && <Spinner />}
    </Flex>
  );
};
