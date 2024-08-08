import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { Link } from 'react-router-dom';
import Modal from '@bighoot/modal-library';

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleEmployeeAdded = () => {
    console.log("Employee added, opening modal...");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal...");
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
