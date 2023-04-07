import axios from 'axios';
import * as React from 'react';
import { IUser } from '../constants/Interfaces';
import { useNavigate } from 'react-router-dom';
import Navigation from './NavBar';



export default function Register() {
    const [Email, setEmail] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const [Name, setName] = React.useState("")
    const [PhoneNo, setPhoneNo] = React.useState("")
    const navigate = useNavigate()
    function handleRegister(e: any): void {
        let RegisterObj: IUser = {
            email: Email,
            name: Name,
            isActive: 0,
            password: Password,
            phoneNo: PhoneNo,
            uid: 0
        }
        axios.post('https://localhost:7000/api/User', RegisterObj).then((response) => { alert("User Added") })
        navigate('/login')
    }

    return (
        <div>
            <Navigation />
            <h1>Register</h1>
            <form onSubmit={(e) => handleRegister(e)}>
                <label>Enter Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label>Enter Email</label>
                <input type="Email" onChange={(e) => setEmail(e.target.value)} />
                <label>Enter Password</label>
                <input type="Text" onChange={(e) => setPassword(e.target.value)} />
                <label>Enter Phone No</label>
                <input type="number" onChange={(e) => setPhoneNo(e.target.value)} />
                <button type="submit">Register</button>
            </form>

        </div>
    );
}
