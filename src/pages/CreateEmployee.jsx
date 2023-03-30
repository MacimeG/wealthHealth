import { Form } from "../components/Form"
// import { Header } from "../components/Header"
import {Link} from 'react-router-dom'
import '../style/Header.css'

export function CreateEmployee(){
    return(
        <div className="HomeContainer">
        <div className="header">
            <nav className="title">
                <h1>HRnet</h1>
                <Link className='linkHeader' to="/EmployeeList">View Current Employees</Link>
            </nav>
                <h2>Create Employee</h2>
        </div>
            <Form/>
        </div>
    )
}