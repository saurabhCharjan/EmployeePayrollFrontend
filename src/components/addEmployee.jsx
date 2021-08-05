/**
 * @module       components
 * @file         addEmployee.jsx
 * @description  adds employee
 * @author       Saurbh <spk2ritika1911@gmail.com>
 * @since        29/07/2021
----------------------------------------------------------------------------------------------- */
import { Paper,Grid, Avatar,TextField, Button} from '@material-ui/core';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Employee} from '../services/employee';
import { useHistory } from 'react-router-dom';
import '../scss/addEmployee.scss';
const employee = new Employee();

function AddEmployee({handleClose}){
    let history = useHistory();
const initialValues ={
    firstName:'',
    lastName:'',
    email:'',
    department:'',
    salary:''
} ;
/**
   * @description schema validation for add employee page
   */
const validationSchema=Yup.object().shape({
    firstName:Yup.string().min(3,'Too short').required('Required'),
    lastName:Yup.string().min(3,'Too short').required('Required'),
    email:Yup.string().email('Enter valid mail address').required('Required'),
    department:Yup.string().min(2,'Too short').required('Required'),
    salary:Yup.number().min(4,'Enter atleast 4 digit').required()
});
const onSubmit=(values,props)=>{
    const empDetails={
        firstName : values.firstName,
        lastName : values.lastName,
        email : values.email,
        department: values.department,
        salary: values.salary
    };
    employee.addEmployee(empDetails).then(res => {
        alert(res.data.message);
        window.location.pathname='/dashboard';
    }).catch(error => {
        console.log(error.message);
    });
    setTimeout(()=>{
        props.resetForm();
     
    },1000);
};
/**
     * @description creating add employee page
     */
    return( 
        <Grid>
            <Paper  elevation={0} className="paperStyle"> 
            <Grid align ="center">
                <Avatar className="avatarStyle">
                    <AccountBoxIcon/>
                </Avatar> 
                <h2 className="header" data-testid="title">Employee Payroll App</h2>
                <h2 className="header" data-testid="add">Add Employee</h2>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                    <Form data-testid="form">
                        <Field as={TextField} data-testid="firstName" fullWidth name="firstName" label='First Name' placeholder= 'Enter Your first name' helperText={<ErrorMessage name="firstName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} data-testid="lastName" fullWidth name="lastName"label='Last Name' placeholder= 'Enter Your last name' helperText={<ErrorMessage name="lastName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="email" name="email" label='Email' placeholder= 'Enter Your email' helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="department" name="department" label='Department' placeholder= 'Enter Your Department' helperText={<ErrorMessage name="department">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="salary" name="salary" label='Salary' placeholder= 'Enter Your Salary' helperText={<ErrorMessage name="salary">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Button type='submit' data-testid="submit" varient='contained' fullWidth className="buttonMargin" onClick={handleClose}>Submit</Button>
                    </Form>
                )}
            </Formik>
            </Paper>
        </Grid>
    );
}
export default AddEmployee;