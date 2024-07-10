import React from 'react';
import { Employee } from '../types';

interface TextInputProps {
  label: string;
  id: keyof Employee;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} value={value} onChange={onChange} />
  </div>
);

export default TextInput;
