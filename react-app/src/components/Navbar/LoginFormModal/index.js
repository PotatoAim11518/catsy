import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import Button from '../../Button';

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button text={"Sign in"} action={() => setShowModal(true)} color={"#f3aa77"} width={75}/>
      {/* <button onClick={() => setShowModal(true)}>Sign in</button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal
