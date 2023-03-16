import '../style/Header.css'
import {Link} from 'react-router-dom'
export function Header(){
    return(
        <div className="header">
            <div className="title">
                <h1>HRnet</h1>
                <Link className='linkHeader' to="/EmployeeList">View Current Employees</Link>
                <h2>Create Employee</h2>
            </div>
        </div>
    )
}