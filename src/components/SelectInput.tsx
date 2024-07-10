import React from 'react';
import { Employee } from '../types';

interface SelectInputProps {
  label: string;
  id: keyof Employee;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { name: string; abbreviation: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, id, value, onChange, options }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.abbreviation} value={option.abbreviation}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
