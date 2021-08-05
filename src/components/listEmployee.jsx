/**
 * @module       components
 * @file         listEmployee.jsx
 * @description  creates list of employees in cards
 * @author       Saurabh <charjan44@gmail.com>
 * @since        29/07/2021
----------------------------------------------------------------------------------------------- */
import React,{ useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Employee} from '../services/employee';
import IconButton from '@material-ui/core/IconButton'; 
import EditIcon from '@material-ui/icons/Edit';
import Snackbar from '@material-ui/core/Snackbar';


import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const employee = new Employee();

export default function SimpleCard({handleUpdate}) {
  const [employees, setEmployees] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  
  const getEmployees =()=>{
    employee.getEmployee().then(res => {
      setEmployees(res.data.data);
  }).catch(error => {
      console.log(error.message);
  });};

  useEffect(() => {
    getEmployees();
  }, [employee]);

  const deleteEmp = (empId) => {
    employee.deleteEmployee(empId).then(res => {
        setOpen(true);
        window.location.pathname='/dashboard';
    }).catch(error => {
        console.log(error.message);
    });
};
const handleClose = () => {
  setOpen(false);
};
/**
     * @description creating list employee page in cards
     */

  return (
     <Container>
       <Grid container spacing={3} direction="row">
        {employees.map(emp=>(
          <Grid item key={emp._id} xs={12} md={12} lg={4}>
            <Card elevation={2}>
                <CardContent align='left'>
                    <Typography data-testid="fname">
                       Name: {emp.firstName}  {emp.lastName}
                    </Typography>
                    <Typography varient="h7"  data-testid="email">
                       Email: {emp.email}
                    </Typography>
                    <Typography  data-testid="department">
                       Department: {emp.department}
                    </Typography>
                    <Typography data-testid="salary" >
                       Salary: {emp.salary} 
                    </Typography>
                    <IconButton onClick={()=> {handleUpdate(emp._id);}} data-testid="update">
                        <EditIcon/>
                    </IconButton>
                    <IconButton data-testid="del" onClick={()=>{deleteEmp(emp._id);}}> 
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                </CardContent>
            </Card>
            </Grid>
        ))}
        <Snackbar
                 anchorOrigin={{ vertical:'top', horizontal:'center' }}
                 open={open}
                 autoHideDuration={2000}
                onClose={handleClose}
                message="Emloyee deleted successfull!!!"
                  />
       </Grid>
     </Container>  
  );
}