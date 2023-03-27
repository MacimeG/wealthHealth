import {Link} from 'react-router-dom'

import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

import {useSelector} from 'react-redux'
import '../style/EmployeeList.css'

export const EmployeeList = () => {

    const stateEmployee = useSelector((state) => state.employees)
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
          <nav className='employeeListNav'>
            <h1 className='employeeNavTitle'>HRnet</h1>
            <Link className='linkHome' to="/">Home</Link>

          </nav>
              <h2>Employee List</h2>
            {stateEmployee.length === 1 ?(
              <span className='no-data'>no data available in table, please create an employee </span>
            ):(
              <div className='table-content'>
                <MaterialReactTable enableColumnFilters={false} enableFullScreenToggle={false} enableDensityToggle={false} columns={columns} data={stateEmployee}/>

              </div>

            )}
            {/* <Link className='linkHome' to="/">Home</Link> */}
        </div> 
    )
  };  

