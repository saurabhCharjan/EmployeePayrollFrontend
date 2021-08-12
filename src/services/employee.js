import Axios from 'axios';
require('dotenv').config();

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');
const header = {
    headers:{
    'token': token
  }};
export class Employee  {
    addEmployee = (empDetails)=>{
        return Axios.post('/empPayroll',empDetails,header);
    };

    getEmployee = () =>{
        return Axios.get('/getEmpPayroll',header);
    }

    deleteEmployee = (empId) =>{
        return Axios.delete(`/deleteEmpPayroll/${empId}`,header);
    }

    getEmployeeById =(id) =>{
        return Axios.get(`/getEmpPayrollByID/${id}`,header);
    }

    updateEmployee = (empDetails,empId)=>{
        return Axios.put(`/updateEmpPayroll/${empId}`,empDetails,header);
    }
}