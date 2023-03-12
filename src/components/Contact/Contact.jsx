import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { Flex, Box, Text, Avatar, Button } from '@chakra-ui/react';


export const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
    <Flex>
  <Avatar />
  <Box ml='3'>
    <Text fontWeight='bold'>
      {name}
    </Text>
    <Text fontSize='sm'>{number}</Text>
        </Box>
              <Button ml='1' p='1' type="button" onClick={handleDelete}>
        Delete
      </Button>
</Flex>
    </>
  );
};