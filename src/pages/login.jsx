import { Avatar, Button, Grid, Paper,TextField, Typography} from '@material-ui/core';
import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {User} from '../services/user'
import { useHistory } from 'react-router-dom';
const user = new User()
const Login=()=>{
    let history = useHistory();
    const buttonMargin = {marginTop :'10px', color:'gray', border:'2px solid'}
    const header = {margin:'3px'}
    const paperStyle={
        padding:20,
        width:300,
        margin:'30px auto'
    }
    const initialValues ={
        email:'',
        password:''
    } 
    const validationSchema=Yup.object().shape({
        email:Yup.string().email("Enter valid mail address").required("Required"),
        password:Yup.string().min(8,"Enter minimum 8 char").required("Required")
    })
    const handleRegister=()=>{
        history.push("/register")
    }
    const onSubmit=(values,props)=>{
        const userCredentials={
            email : values.email,
            password: values.password
        }
        user.login(userCredentials).then(res => {
            alert(res.data.message);
            localStorage.setItem('token',res.data.token )
            history.push('/dashboard')
        }).catch(error => {
            console.log(error);
        })
        setTimeout(()=>{
            props.resetForm()
        },1000)
    }
    
    return(
        <Router>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar>
                <AccountBoxIcon/>
                </Avatar>
                <h2 style={header}data-testid="title">Employee Payroll App</h2>
                <h2 style={header} data-testid="login">Login</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                    <Form data-testid="form">
                        <Field as={TextField} fullWidth autoComplete="off" name='email' label='Email' placeholder= 'Enter Your email' data-testid="email" required  helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Field as={TextField} fullWidth autoComplete="off" name='password' label='Password' type='password' data-testid="password" placeholder= 'Enter Your password' required helperText={<ErrorMessage name="password">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                        <Button type='submit' fullWidth style={buttonMargin} data-testid="submit">Login</Button>
                        <Typography > 
                        Do you have an account ?
                        <Link to = '/register' onClick={handleRegister}>Register</Link>
                         </Typography>
                    </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
        </Router>
    )
}
export default Login;