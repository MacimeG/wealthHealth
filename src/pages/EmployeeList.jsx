import {Link} from 'react-router-dom'

import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

import {useSelector} from 'react-redux'


const testData = [
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
];
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
      [stateEmployee],
    );
  
    return(
        <div className='employeeList_container'>
            <h1>Current Employee</h1>
            <MaterialReactTable enableColumnFilters={false} enableFullScreenToggle={false} enableDensityToggle={false} columns={columns} data={stateEmployee}/>
            <Link className='linkHome' to="/">Home</Link>
        </div> 
    )
  };  

