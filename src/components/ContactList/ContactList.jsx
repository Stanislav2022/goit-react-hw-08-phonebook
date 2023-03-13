import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { Flex } from '@chakra-ui/react';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltereContacts = () => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();       
    const filteredContacts = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = number.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })   
    return filteredContacts;
    }

    const filterContacts = getFiltereContacts();


  return (
    <Flex p='8' align="center" justify="center">
      <ul >
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </Flex>
  );
};
