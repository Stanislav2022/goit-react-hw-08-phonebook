import { useDispatch } from 'react-redux';
import { deleteContact} from 'redux/contacts/contacts-operation';


export const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
          <p>{name}</p>
          <p>{number}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};