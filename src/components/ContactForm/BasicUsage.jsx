import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { Modal, ModalOverlay, ModalContent, Button, useDisclosure } from '@chakra-ui/react'

export const InitialFocus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
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
        onSubmit={handleSubmit}
      >
        <ModalOverlay />
        <ModalContent p={5}>
          <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </label>
          <Button onClick={onClose} type="submit" colorScheme='blue' mr={3}>Add Contact</Button>
          <Button onClick={onClose}>Cancel</Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}