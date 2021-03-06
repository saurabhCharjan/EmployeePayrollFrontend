/**
 * @module       pages
 * @file         register.jsx
 * @description  creates form for registration
 * @author       Saurabh <charjan44@gmail.com>
 * @since        22/07/2021
----------------------------------------------------------------------------------------------- */
import { Paper,Grid, Avatar,TextField, Button,Typography  } from '@material-ui/core';
import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {User} from '../services/user';
import { useHistory } from 'react-router-dom';
import '../scss/register.scss';
const user = new User();

function Register(){
    let history = useHistory();

const initialValues ={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    conformPassword:''
}; 
 /**
     * @description Validation schema for registartion page
     */
const validationSchema=Yup.object().shape({
    firstName:Yup.string().min(3,'Too short').required('Required'),
    lastName:Yup.string().min(3,'Too short').required('Required'),
    email:Yup.string().email('Enter valid mail address').required('Required'),
    password:Yup.string().min(8,'Enter minimum 8 char').required('Required'),
    conformPassword:Yup.string().oneOf([Yup.ref('password')],'password must match')
});
const handleLogin=()=>{
    history.push('/login');
};
const onSubmit=(values,props)=>{
    const userDetails={
        firstName : values.firstName,
        lastName : values.lastName,
        email : values.email,
        password: values.password
    };
    user.registration(userDetails).then(res => {
        alert(res.data.message);
        history.push('/login');
    }).catch(error => {
        console.log(error.message);
    });
    setTimeout(()=>{
        props.resetForm();
        props.setSubmitting(false);
    },1000);
};
/**
     * @description creating registartion form
     */
    return( 
        <Router>
        <Grid>
            <Paper  elevation={20} className="paperStyle"> 
            <Grid align ="center">
                <Avatar className="avatarStyle">
                    <AccountBoxIcon/>
                </Avatar> 
                <h2 className="header" data-testid="title">Employee Payroll App</h2>
                <h2 className="header" data-testid="register">Register</h2>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                    <Form data-testid="form">
                        <Field as={TextField} data-testid="firstName" fullWidth name="firstName" label='First Name' placeholder= 'Enter Your first name' helperText={<ErrorMessage name="firstName">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} data-testid="lastName" fullWidth name="lastName"label='Last Name' placeholder= 'Enter Your last name' helperText={<ErrorMessage name="lastName">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="email" name="email" label='Email' placeholder= 'Enter Your email' helperText={<ErrorMessage name="email">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="password" name="password" label='Password' type="password" placeholder= 'Enter Your password' helperText={<ErrorMessage name="password">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth data-testid="conformPassword" name="conformPassword" label='Confirm Password' type='password' placeholder= 'Enter Your conform password' helperText={<ErrorMessage name="conformPassword">{ msg => <div className="errorMessage">{msg}</div> }</ErrorMessage>}/>
                        <Button type='submit' data-testid="submit" varient='contained' disabled={props.isSubmitting} border ='2px solid' fullWidth className='buttonMargin'>{props.isSubmitting?'Loading...':'Register'}</Button>
                        <Typography > 
                        Already an User?
                        <Link to = '/login' onClick={handleLogin}>Login</Link>
                         </Typography>
                    </Form>
                )}
            </Formik>
            </Paper>
        </Grid>
        </Router>
    );
}
export default Register;