import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Base from '../Base/Base';
import { data } from '../Data/data';

export function UserDetails ()  {
    const [employeesData, setEmployees] = useState(data);
    // const [editId, setEditId] = useState("");
    // const [id, setId] = useState("");
    // const [Name, setName] = useState("");
    // const [Batch, setBatch] = useState("");
    // const [Gender, setGender] = useState("");
    // const [Experiences, setExperience] = useState("");
   
    
    

    // const deleteEmployeesData = (employeeID) => {
    //     const removedEmployee = employeesData.filter(
    //       (employee) => employee.id !== employeeID
    //     );
    //     setEmployees(removedEmployee);
    //   };
    
    //   // update the form
    
    //   const editandSelectEmployee = (employeeID) => {
    //    setEditId(employeeID);
    //     const selectedData = employeesData.find(
    //       (employee) => employee.id === employeeID
    //     );
    //     setId(selectedData.id);
    //     setName(selectedData.Name);
    //     setBatch(selectedData.Batch);
    //     setGender(selectedData.Gender);
    //     setExperience(selectedData.yearsOfExperience);
    //   };
    
     
    //     // select and find the employee
    
    //     const editEmployeeindex = employeesData.findIndex(
    //       (employee) => employee.id === editId
    //     );
    //     // we need the updated object
    
    //     const updatedEmployeeObj = {
    //       id,
    //       Name,
    //       Batch,
    //       Gender,
    //       yearsOfExperience: Experiences,
    //     };
    
    //     // change the selected specific array of data
    //     employeesData[editEmployeeindex] = updatedEmployeeObj;
    
    //     // set the employee data
    //     setEmployees([...employeesData]);
    //     setId("");
    //     setName("");
    //     setBatch("");
    //     setGender("");
    //     setExperience("");
      
      
  return (
    <div>
       <Base
    heading="batch Details"
    description="all user details"
    ></Base>
         <div className="main-card">
        {employeesData.map((employee, id) => (
          <div className="card-div" >
          <Card 
          key={employee.id}>
            <CardContent className="content-div">
              <Typography gutterBottom variant="h5" component="div">
                Name:{employee.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                batch :{employee.Batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                gender:{employee.Gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                experience:{employee.yearsOfExperience}
              </Typography>
            </CardContent>
            {/* <CardActions className="btn-div">
             <Button
                onClick={() => editandSelectEmployee(employee.id)}
                size="small"
                variant="contained"
                color="primary"
              >
                edit
              </Button>
              
              
             
             
              <Button
              
                onClick={() => deleteEmployeesData(employee.id)}
                size="small"
                variant="contained"
                color="error"
              >
                delete
                </Button>
                <Button
              
              onClick={() => deleteEmployeesData(employee.id)}
              size="small"
              variant="contained"
              color="secondary"
            >
              viewoptions
              </Button>
             
            </CardActions> */}
          </Card>
          </div>
        ))}
      </div>
      <div>
      <footer className='footer-div'>
                <p>
                😍Thank you to visit this page😍
               
                </p>
             
            </footer>
      </div>
    // </div>
  )
}

export default UserDetails;