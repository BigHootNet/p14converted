import React from 'react';
import { useDispatch } from 'react-redux';
import { setEmployees } from '../redux/employeesSlice';
import useEmployeeForm from '../hooks/useEmployeeForm';
import { Employee } from '../types';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateInput from './DateInput';
import { states } from '../data/states';
import '../styles/app.css';

const EmployeeForm: React.FC<{ onEmployeeAdded: () => void }> = ({ onEmployeeAdded }) => {
  const dispatch = useDispatch();
  const { state, setField, setDate } = useEmployeeForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setField(id as keyof Employee, value);
  };

  const handleDateChange = (fieldName: keyof Employee, date: Date | null) => {
    setDate(fieldName, date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.push(state);
    localStorage.setItem('employees', JSON.stringify(employees));
    dispatch(setEmployees(employees)); // Ensure Redux state is updated with the latest employees
    onEmployeeAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="FIRST NAME"
        id="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <TextInput
        label="LAST NAME"
        id="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
      <DateInput
        label="DATE OF BIRTH"
        id="dateOfBirth"
        selected={state.dateOfBirth}
        onChange={(date) => handleDateChange('dateOfBirth', date)}
      />
      <DateInput
        label="START DATE"
        id="startDate"
        selected={state.startDate}
        onChange={(date) => handleDateChange('startDate', date)}
      />
      <SelectInput
        label="DEPARTMENT"
        id="department"
        value={state.department}
        onChange={handleChange}
        options={[
          { name: 'Sales', abbreviation: 'Sales' },
          { name: 'Marketing', abbreviation: 'Marketing' },
          { name: 'Engineering', abbreviation: 'Engineering' },
          { name: 'Human Resources', abbreviation: 'Human Resources' },
        ]}
      />
      <TextInput
        label="STREET"
        id="street"
        value={state.street}
        onChange={handleChange}
      />
      <TextInput
        label="CITY"
        id="city"
        value={state.city}
        onChange={handleChange}
      />
      <SelectInput
        label="STATE"
        id="state"
        value={state.state}
        onChange={handleChange}
        options={states}
      />
      <TextInput
        label="ZIP CODE"
        id="zipCode"
        value={state.zipCode}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
