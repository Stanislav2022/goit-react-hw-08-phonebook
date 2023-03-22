import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { Flex, Box, Text, Avatar, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'


export const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  let slicedName = name.slice(0,15);
  if (slicedName.length < name.length) {
   slicedName += '...';
   }

  return (
    <Flex p='1' justify='flex-start' w='300px'>
      <Avatar name={name} src='https://bit.ly/broken-link'/>
      <Box pl='3' pr='3'>
        <Text >{slicedName}</Text>
        <Text variant = 'sm' >{number}</Text>
        </Box>
      <IconButton ml='auto' onClick={handleDelete} aria-label='Search database' icon={<DeleteIcon />} />
    </Flex>
  );
};