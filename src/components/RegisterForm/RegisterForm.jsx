import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
     const form = e.target;
    console.log(e.target.elements.name.value);
    dispatch(
      register({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} >
      <label className={css.label}>
        Username
        <input type="text" name="name"/>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email"/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password"/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
