import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from 'redux/contacts/contacts-selector';


export const ContactList = () => {
  const contact = useSelector(getContacts);

  return (
    <ul >
      {contact.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
