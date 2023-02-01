import React from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'

export function EmployeesProfile ({employeesData}){
  const {id}=useParams();
  const employee=employeesData[id]
  
  return (
   <Base
   heading="employee profile"
   description="individual student details"
   >
    <div>
    <h2>Employee-Profile</h2>
    <p>Employee Name:{employee.Name}</p>
    <p>Batch:{employee.Batch} </p>
    <p>Gender:{employee.Gender}</p>
    <p>yearsOfExperience:{employee.yearsOfExperience}</p>
   </div>
   </Base>
  
  )
}

export default EmployeesProfile;