import { Paper,Grid, Avatar,TextField, Button} from '@material-ui/core';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Employee} from '../services/employee'
const employee = new Employee()

function UpdateEmployee({emp, handleClose}){
const paperStyle = {padding:'0 15px 10px 20px',width:300,margin:'50px auto' }
const header = {margin:'3px'}
const avatarStyle = {backgroundColor:'gray'}
const buttonMargin = {marginTop :'10px', color:'gray', border:'2px solid'}
const initialValues ={
    firstName: emp.firstName,
    lastName: emp.lastName,
    email: emp.email,
    department: emp.department,
    salary: emp.salary
} 
const validationSchema=Yup.object().shape({
    firstName:Yup.string().min(3,"Too short").required("Required"),
    lastName:Yup.string().min(3,"Too short").required("Required"),
    email:Yup.string().email("Enter valid mail address").required("Required"),
    department:Yup.string().min(2,"Too short").required("Required"),
    salary:Yup.number().min(4,"Enter atleast 4 digit").required()
})
const onSubmit=(values,props)=>{
    const empDetails={
        firstName : values.firstName,
        lastName : values.lastName,
        email : values.email,
        department: values.department,
        salary: values.salary
    }
    employee.updateEmployee(empDetails,emp._id).then(res => {
        alert("Employee updates successfull!!!");
    }).catch(error => {
        console.log(error.message);
    })
    setTimeout(()=>{
        props.resetForm()
    },1000)
}

    return( 
        <Grid>
            <Paper  elevation={0} style={paperStyle}> 
            <Grid align ="center">
                <Avatar style={avatarStyle}>
                    <AccountBoxIcon/>
                </Avatar> 
                <h2 style={header} data-testid="title">Employee Payroll App</h2>
                <h2 style={header} data-testid="register">Update Employee</h2>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                    <Form data-testid="form">
                        <Field as={TextField} data-testid="firstName" fullWidth name="firstName" label='First Name' placeholder= 'Enter Your first name' helperText={<ErrorMessage name="firstName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} data-testid="lastName" fullWidth name="lastName"label='Last Name' placeholder= 'Enter Your last name' helperText={<ErrorMessage name="lastName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="email" name="email" label='Email' placeholder= 'Enter Your email' helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="department" name="department" label='Department' placeholder= 'Enter Your Department' helperText={<ErrorMessage name="department">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="salary" name="salary" label='Salary' placeholder= 'Enter Your Salary' helperText={<ErrorMessage name="salary">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Button type='submit' data-testid="submit" varient='contained' fullWidth style={buttonMargin} onClick={handleClose}>Submit</Button>
                    </Form>
                )}
            </Formik>
            </Paper>
        </Grid>
    );
}
export default UpdateEmployee;