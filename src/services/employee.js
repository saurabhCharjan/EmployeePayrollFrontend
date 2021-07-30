import Axios from 'axios';
require('dotenv').config()

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

export class Employee  {
    addEmployee = (empDetails)=>{
        console.log(token,"tokennnn")
        console.log(empDetails)
        return Axios.post("/empPayroll",empDetails,{
            headers:{
            'token': token
          }});
    };
}