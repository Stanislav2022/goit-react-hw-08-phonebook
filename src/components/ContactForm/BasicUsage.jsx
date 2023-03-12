import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Input, Button, FormLabel, useDisclosure, FormControl  } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';

export const InitialFocus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
const finalRef = React.useRef(null)
    
const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact({ "name": e.target.elements.name.value, "number": e.target.elements.number.value }));
    form.reset();
  };

  return (
    <>
      <Button onClick={onOpen}>Add contact</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder='Name' type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Number</FormLabel>
              <Input placeholder='Number' type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}