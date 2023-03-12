import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operation';
import { InitialFocus } from './BasicUsage';


export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact({ "name": e.target.elements.name.value, "number": e.target.elements.number.value }));
    form.reset();
  };

    return (
      <>
        <InitialFocus/>

      </>
    );
  };

