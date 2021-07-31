import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Employee} from '../services/employee'
const employee = new Employee()



export default function EmpCard({ emp }){

    const deleteEmp = (empId) => {
        employee.deleteEmployee(empId).then(res => {
            alert("Employee Deleted!!!")
        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="root">
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
                    <IconButton onClick={deleteEmp(emp._id)} > 
                        <DeleteOutlineOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </CardContent>
            </Card>
        </div>
    )
}
