import { Paper,Grid, Avatar,TextField, Button } from '@material-ui/core';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {User} from '../services/user'
const user = new User()

function Register(){
const paperStyle = {padding:'30px 20px',width:300,margin:'50px auto'}
const header = {margin:'3px'}
const avatarStyle = {backgroundColor:'gray'}
const buttonMargin = {marginTop :'10px', color:'gray', border:'2px solid'}
const initialValues ={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    conformPassword:''
} 
const validationSchema=Yup.object().shape({
    firstName:Yup.string().min(3,"Too short").required("Required"),
    lastName:Yup.string().min(3,"Too short").required("Required"),
    email:Yup.string().email("Enter valid mail address").required("Required"),
    password:Yup.string().min(8,"Enter minimum 8 char").required("Required"),
    conformPassword:Yup.string().oneOf([Yup.ref('password')],"password must match")
})
const onSubmit=(values,props)=>{
    const userDetails={
        firstName : values.firstName,
        lastName : values.lastName,
        email : values.email,
        password: values.password
    }
    user.registration(userDetails).then(res => {
        alert(res.data.message);
    }).catch(error => {
        console.log(error.message);
    })
    setTimeout(()=>{
        props.resetForm()
        props.setSubmitting(false)
    },1000)
}

    return( 
        <Grid>
            <Paper  elevation={20} style={paperStyle}> 
            <Grid align ="center">
                <Avatar style={avatarStyle}>
                    <AccountBoxIcon/>
                </Avatar> 
                <h2 style={header}>Employee Payroll App</h2>
                <h2 style={header}>Register</h2>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} fullWidth name="firstName" label='First Name' placeholder= 'Enter Your first name' helperText={<ErrorMessage name="firstName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth name="lastName"label='Last Name' placeholder= 'Enter Your last name' helperText={<ErrorMessage name="lastName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth name="email" label='Email' placeholder= 'Enter Your email' helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth name="password" label='Password' type="password" placeholder= 'Enter Your password' helperText={<ErrorMessage name="password">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth name="conformPassword" label='Confom Password' type="password" placeholder= 'Enter Your conform password' helperText={<ErrorMessage name="conformPassword">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Button Type='submit' varient='contained' disabled={props.isSubmitting} fullWidth style={buttonMargin}>{props.isSubmitting?"Loading...":"Register"}</Button>
                    </Form>
                )}
            </Formik>
            </Paper>
        
        </Grid>
    );
}
export default Register;