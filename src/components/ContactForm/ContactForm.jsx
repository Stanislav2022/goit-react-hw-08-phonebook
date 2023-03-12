import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { Modal, ModalOverlay, ModalContent, Button, useDisclosure, Input } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import css from './ContactForm.module.css';


export const ContactForm = () => {
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
      <div >
        <div className={css.contact__add}>
          <Button leftIcon={<AddIcon />} onClick={onOpen}>Add</Button>
        </div>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <ModalOverlay />
          <ModalContent p={6}>
            <form onSubmit={handleSubmit}>
            <label className={css.contact__input}>
                Name
                <Input placeholder='Name' type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
            </label>
            <label className={css.contact__input}>
                Phone
                <Input placeholder='Phone number' type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
            </label>
            <Button  type="submit" colorScheme='blue'>Save</Button>
            <Button onClick={onClose} colorScheme='red'>Cancel</Button>
            </form>
          </ModalContent>
        </Modal>
      </div>
    );
  };

