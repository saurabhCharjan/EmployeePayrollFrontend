import Axios from 'axios';
require('dotenv').config();

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export class User  {
    registration = (userDetails)=>{
        return Axios.post('/registerUser', userDetails);
    };

    login = (userCredentials)=>{
        return Axios.post('/login',userCredentials);
    }
}