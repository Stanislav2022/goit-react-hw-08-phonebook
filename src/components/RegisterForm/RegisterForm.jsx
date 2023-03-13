import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button, Input, Flex, FormLabel, FormControl } from '@chakra-ui/react'

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit} >
        <FormControl pb='3'>
        <FormLabel>Name</FormLabel>
          <Input placeholder='Name' type="text" name="name" />
        </FormControl>
<       FormControl pb='3'>
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
      </Flex>
  );
};
