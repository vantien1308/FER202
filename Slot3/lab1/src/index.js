import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmployeeDetails from './Exercise_1';
import EmployeeList from './Exercise_2';
import EmployeeTable from './Exercise_3';
import AverageAge from './Exercise_4';
import EmployeeDropdown from './Exercise_5';
import ITEmployees from './Exercise_6';
import SortedEmployees from './Exercise_7';
import GroupedByDepartment from './Exercise_8';
import HasTeenager from './Exercise_9';
import SearchEmployee from './Exercise_10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <EmployeeDetails/>
    <EmployeeList/>
    <EmployeeTable/>
    <AverageAge/>
    <EmployeeDropdown/>
    <ITEmployees/>
    <SortedEmployees/>
    <GroupedByDepartment/>
    <HasTeenager/>
    <SearchEmployee/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
