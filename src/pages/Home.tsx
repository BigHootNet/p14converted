import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import Modal from '../lib/Modal';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleEmployeeAdded = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="form-container">
      <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
      <Modal isOpen={modalIsOpen} onClose={closeModal} title="Confirmation">
        <p>Employee added successfully!</p>
      </Modal>
      <Link to="/employee-list">
        <button>View Employee List</button>
      </Link>
    </div>
  );
};

export default Home;
