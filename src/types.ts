export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface EmployeesState {
  employees: Employee[];
}

export type ActionType =
  | { type: 'SET_FIELD'; fieldName: string; payload: string }
  | { type: 'SET_DATE'; fieldName: string; payload: Date | null };
