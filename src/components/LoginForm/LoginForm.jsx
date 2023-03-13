import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Button, Input, Flex,FormLabel, FormControl } from '@chakra-ui/react'

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
      <Flex p='8' justify='center'>
    <form className={css.form} onSubmit={handleSubmit} >
      <FormControl pb='3'>
                <FormLabel>Email</FormLabel>
                  <Input placeholder='Email' type="email" name="email" />
                </FormControl>
      <FormControl pb='3'></FormControl>
            <FormControl pb='3'>
                <FormLabel>Password</FormLabel>
                  <Input placeholder='Password' type="password" name="password" />
                </FormControl>
      <FormControl pb='3'></FormControl>
      
      <Button type="submit">Log In</Button>
      </form>
      </Flex>
  );
};
