import React,{ useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import EmpCard from './empCard';
import {Employee} from '../services/employee'
const employee = new Employee()

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const [employees, setEmployees] = React.useState([]);

  const getEmployees =()=>{
      employee.getEmployee().then(res => {
        setEmployees(res.data.data)
    }).catch(error => {
        console.log(error.message);
    })
  }

  useEffect(() => {
    getEmployees();
  }, []);


  return (
     <Container>
       <Grid container spacing={3} direction="row">
        {employees.map(emp=>(
          <Grid item key={emp.id} xs={12} md={6} lg={3}>
            <EmpCard emp={emp}/>
            </Grid>
        ))}
       </Grid>
     </Container>  
  );
}