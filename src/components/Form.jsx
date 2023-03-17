import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../style/Form.css'
import 'react-dropdown/style.css';
import {states} from "../data/state.js"
import { department } from "../data/department";
import { Modal } from "./Modal";
import { useDispatch} from 'react-redux'
import { RESPONSEDATA, store } from "../store";


export function Form(){

    const selectState = [...states]
    const selectDepart = [...department]

    
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [departments, setDepartment] = useState('')
    const [save, setsave] = useState(false)

    const dispatch = useDispatch()
    
    function handleSubmit(e){
        e.preventDefault()
        const employee={
            firstName,
            lastName,
            birthDate: birthDate.toDateString(),
            startDate: startDate.toDateString(),
            street,
            city,
            state,
            zipCode,
            departments,
        }
        dispatch(RESPONSEDATA(employee))
        console.log('State after dispatch: ', store.getState())
        setsave(true)
    }
    function closeModal(){
        setsave(false)
    }
    return(
        <div className="form-container">
            <form className='form' action="#" id="create-employee" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
               

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={(e) => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(e) => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Dropdown options={selectState} placeholder="Select an option" onChange={(e) => setState(e.value)}/>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)} />
                </fieldset>
                <label htmlFor="department" className="labelDepartment">Department</label>
                <Dropdown className="dropDepartment" options={selectDepart}  placeholder="Select an option" onChange={(e) => setDepartment(e.value)}/>
            <button className="form-button">Save</button>
            </form>
            {save === true ? <Modal close={closeModal} message={"employee created"} /> : null}
        </div>
    )
}