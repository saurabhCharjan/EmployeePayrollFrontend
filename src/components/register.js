import { Paper,Grid, Avatar,TextField, Button } from '@material-ui/core';
import React from 'react';
import './register.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
function Register(){
const paperStyle = {padding:'30px 20px',width:300,margin:'50px auto'}
const header = {margin:'3px'}
const avatarStyle = {backgroundColor:'gray'}
const buttonMargin = {marginTop :'10px', color:'gray', border:'2px solid'} 
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
            <form>
                <TextField fullWidth label='First Name' placeholder= 'Enter Your first name'/>
                <TextField fullWidth label='Last Name' placeholder= 'Enter Your last name'/>
                <TextField fullWidth label='Email' placeholder= 'Enter Your email'/>
                <TextField fullWidth label='Password' placeholder= 'Enter Your password'/>
                <TextField fullWidth label='Confom Password' placeholder= 'Enter Your conform password'/>
                <Button Type='submit' varient='contained' fullWidth style={buttonMargin}>Register</Button>
            </form>
            </Paper>
        
        </Grid>
    );
}
export default Register;