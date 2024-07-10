import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmationModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Employee Created">
      <h2>Employee Created!</h2>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ConfirmationModal;
