import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../../Button';
import { login } from '../../../store/session';
import styles from '../ModalForms.module.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onLogin}>
        <div className={styles.inputRow}>
          {/* <label htmlFor='email'>Email</label> */}
          <input
            className={styles.inputField}
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className={styles.inputRow}>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            className={styles.inputField}
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div>
            <button type='submit'>Login</button>
          </div>
        </div>
        <div className={styles.errorsContainer}>
          {errors.map((error, ind) => (
            <div className={styles.error} key={ind}>{error}</div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
