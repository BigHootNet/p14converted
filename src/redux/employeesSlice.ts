import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee, EmployeesState } from '../types';

const initialState: EmployeesState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
      localStorage.setItem('employees', JSON.stringify(state.employees));
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { addEmployee, setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
