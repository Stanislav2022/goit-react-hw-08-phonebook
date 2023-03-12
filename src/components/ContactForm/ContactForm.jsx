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
          <button type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  };

