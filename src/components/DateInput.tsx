import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Employee } from '../types';

interface DateInputProps {
  label: string;
  id: keyof Employee;
  selected: string;
  onChange: (date: Date | null) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, id, selected, onChange }) => {
  const selectedDate = selected ? new Date(selected) : null;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
        id={id}
      />
    </div>
  );
};

export default DateInput;
