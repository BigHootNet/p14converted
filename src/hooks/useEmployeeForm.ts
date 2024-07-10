import { useState } from 'react';
import { Employee } from '../types';

const useEmployeeForm = () => {
  const [state, setState] = useState<Employee>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const setField = (field: keyof Employee, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };

  const setDate = (field: keyof Employee, date: Date | null) => {
    setState((prevState) => ({
      ...prevState,
      [field]: date ? date.toISOString().split('T')[0] : ''
    }));
  };

  return { state, setField, setDate };
};

export default useEmployeeForm;
