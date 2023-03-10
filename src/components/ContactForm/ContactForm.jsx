import { useDispatch } from 'react-redux';
import { addContact} from 'redux/contacts/contacts-operation';

export const ContactForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const { name, phone } = e.target.elements;
    const form = e.target;
    dispatch(addContact({name: name.value, phone: phone.value}));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <lable>
        <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
      </lable>
      <lable>
        <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </lable>
      <button type="submit">
        Add task
      </button>
   </form>

  );
};

