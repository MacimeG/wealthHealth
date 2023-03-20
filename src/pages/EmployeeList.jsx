import {Link} from 'react-router-dom'

import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

import {useSelector} from 'react-redux'
import '../style/EmployeeList.css'

export const EmployeeList = () => {

    const stateEmployee = useSelector((state) => state.employees)
    console.log(stateEmployee);
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'employees.firstName', //access nested data with dot notation
          header: 'First Name',
        },
        {
          accessorKey: 'employees.lastName',
          header: 'Last Name',
        },
        {
          accessorKey: 'employees.startDate',
          header: 'Start date',
        },
        {
            accessorKey: 'employees.departments',
            header: 'Departments',
        },
        {
          accessorKey: 'employees.birthDate',
          header: 'Date of birth',
        },
        {
          accessorKey:'employees.street',
          header: "Street",
        },
        {
          accessorKey: 'employees.city',
          header: 'City',
        },
        {
          accessorKey: 'employees.state',
          header: 'State',
        },
        {
            accessorKey: 'employees.zipCode',
            header: 'Zip code',
        },

      ],
      [],
    );
  
    return(
        <div className='employeeList_container'>
            <h1>Current Employee</h1>
            <MaterialReactTable enableColumnFilters={false} enableFullScreenToggle={false} enableDensityToggle={false} columns={columns} data={stateEmployee}/>
            <Link className='linkHome' to="/">Home</Link>
        </div> 
    )
  };  

