import React from 'react';
import Modal from '@bighoot/modal-library';

const ConfirmationModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onRequestClose} title="Employee Created">
      <h2>Employee Created!</h2>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ConfirmationModal;
