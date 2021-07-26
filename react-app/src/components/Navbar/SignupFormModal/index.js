import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignupForm from './SignUpForm';
import Button from '../../Button';

export default function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button text={"Register"} action={() => setShowModal(true)} color={"black"} width={75}/>

      {/* <button onClick={() => setShowModal(true)}>Register</button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}
