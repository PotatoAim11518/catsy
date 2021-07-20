import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignupForm from './SignUpForm';

export default function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Register</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}
