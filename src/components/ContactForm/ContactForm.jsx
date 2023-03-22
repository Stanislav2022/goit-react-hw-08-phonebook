import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { Modal, ModalOverlay, ModalContent, Button, useDisclosure, Input, Flex,FormLabel, FormControl, useToast } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { getContacts } from 'redux/contacts/contacts-selector';


export const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const items = useSelector(getContacts);;
  const toast = useToast()

  const isDuplicate = (element) => {
    const result = items.find((item) => item.name.toLocaleLowerCase() === element.toLocaleLowerCase())
    return result
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    if (!isDuplicate(e.target.elements.name.value)) {
      const form = e.target;
      dispatch(addContact({ "name": e.target.elements.name.value, "number": e.target.elements.number.value }));
      form.reset();
      return
    }
      toast({
        title: 'Error',
        description: `${e.target.elements.name.value} is already in the contact list`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
  };

    return (
      <Flex p='6' justify='flex-end'>
        <Button leftIcon={<AddIcon />} onClick={onOpen}>Add</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <ModalOverlay />
          <ModalContent p='3'>
            <form onSubmit={handleSubmit}>
              <FormControl pb='3'>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Name' type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              </FormControl>
              <FormControl pb='3'>
                <FormLabel>Phone</FormLabel>
                <Input placeholder='Phone number' type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              </FormControl>
              <Flex justify='space-evenly'>
                <Button type="submit">Save</Button>
                <Button onClick={onClose}>Cancel</Button>
              </Flex>
            </form>
          </ModalContent>
        </Modal>
      </Flex>
    );
}
