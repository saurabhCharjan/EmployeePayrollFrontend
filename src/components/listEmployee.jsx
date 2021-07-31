import React,{ useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Employee} from '../services/employee'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const employee = new Employee()

export default function SimpleCard() {
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
  }, [employees]);

  const deleteEmp = (empId) => {
    employee.deleteEmployee(empId).then(res => {
        alert("Employee Deleted!!!")
    }).catch(error => {
        console.log(error.message);
    })
}


  return (
     <Container>
       <Grid container spacing={3} direction="row">
        {employees.map(emp=>(
          <Grid item key={emp.id} xs={12} md={6} lg={4}>
            {/* <EmpCard emp={emp}/> */}
            <Card elevation={2}>
                <CardContent>
                    <Typography>
                        {emp.firstName}  {emp.lastName}
                    </Typography>
                    <Typography varient="h7" color="textSecondary">
                        {emp.email}
                    </Typography>
                    <Typography color="textSecondary">
                        {emp.department}
                    </Typography>
                    <Typography color="textSecondary">
                        {emp.salary} 
                    </Typography>
                    <IconButton onClick={()=>{deleteEmp(emp._id)}}> 
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </CardContent>
            </Card>
            </Grid>
        ))}
       </Grid>
     </Container>  
  );
}