import Axios from 'axios';
require('dotenv').config()

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

export class Employee  {
    addEmployee = (empDetails)=>{
        return Axios.post("/empPayroll",empDetails,{
            headers:{
            'token': token
          }});
    };

    getEmployee = () =>{
        return Axios.get("/getEmpPayroll",{
            headers:{
            'token': token
          }});
    }

    deleteEmployee = (empId) =>{
        return Axios.delete(`/deleteEmpPayroll/${empId}`,{
            headers:{
            'token': token
          }})
    }

    getEmployeeById =(id) =>{
        return Axios.get(`/getEmpPayrollByID/${id}`,{
            headers:{
            'token': token
          }});
    }

    updateEmployee = (empDetails,empId)=>{
        return Axios.put(`/updateEmpPayroll/${empId}`,empDetails,{
            headers:{
            'token': token
          }})
    }
}