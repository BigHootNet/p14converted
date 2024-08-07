import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setEmployees } from '../redux/employeesSlice';
import { Employee } from '../types';
import ReactPaginate from 'react-paginate';

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const employeesPerPage = 10;

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      const parsedEmployees: Employee[] = JSON.parse(storedEmployees);
      dispatch(setEmployees(parsedEmployees));
    }
  }, [dispatch]);

  useEffect(() => {
    const filtered = employees.filter(employee =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [employees, searchTerm]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastEmployee = (currentPage + 1) * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table id="employee-table" className="display">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredEmployees.length / employeesPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      <a href="/p14converted/">Home</a>
    </div>
  );
};

export default EmployeeList;
