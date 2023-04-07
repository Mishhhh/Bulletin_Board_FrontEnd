import axios from 'axios';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setSession } from '../redux/actions/LoginAction';
import { IUserName } from '../constants/Interfaces';
import { useNavigate } from 'react-router-dom';
import Navigation from './NavBar';


export default function Login() {
    const [Email, setEmail] = React.useState("")
    const [Password, setPassword] = React.useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const UserSession = (e: any) => {
        axios.post('https://localhost:7000/api/User/Login', { "email": Email, "password": Password }).then((response) => {
            console.log(response)
            // let thisSesion<> ={
                console.log(response.data)

            dispatch(setSession(response.data))
            navigate('/')
        })
        e.preventDefault()
    }
    return (
        <div>
            <Navigation />
            <h1>Login</h1>
            <form onSubmit={(e) => UserSession(e)} style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px" }}>
                <div style={{ margin: "0em 2em", width: "40%" }}>
                    <label>Enter your Email</label>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Enter your Password</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    );
}
