import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';
import { data } from '../Data/data';

export function UserDetails ()  {
  const history =useHistory();
    const [TeachersData, setTeachers] = useState(data);
    // const [editId, setEdit] = useState("");
    // const [id, setId] = useState("");
    // const [Name, setName] = useState("");
    // const [Batch, setBatch] = useState("");
    // const [Gender, setGender] = useState("");
    // const [Experiences, setExperience] = useState("");

    // delete Teachers data

    const deleteTeachersData =(teachersID)=>{
      const removedTeachers =TeachersData.filter(
        (teachers)=>teachers.id !== teachersID
      );
      setTeachers(removedTeachers)
    };

    // to update the form

    // const editandSelectTeachersData=(idx)
    // setEdit(teacherID);
    // const selectedData = TeachersData.find(
    //   (Teachers) => (Teachers.id === editId)
    // );
    //   setId(selectedData.id);
    //   setName(selectedData.Name);
    //   setBatch(selectedData.Batch);
    //   setGender(selectedData.Gender);
    //   setExperience(selectedData.yearsOfExperience);

    // // to edit a data write a functions

    // // const updateteachersData =()=>{

    // // }

    // const editTeachersIndex =TeachersData.findIndex(
    // (teachers)=>teachers.id === editId);

    // // we need the updated object

    // const updatedTeachersObj={
    //   id,Name,Batch,Gender,yearsOfExperience:Experiences
    // }

    // // change the specific array of the index data

    // TeachersData[editTeachersIndex]=updatedTeachersObj;

    // // set the teachers data to the text field 
    // // when edit button is clicked

    // setTeachers([...TeachersData]);
    // setId("");
    // setName("");
    // setBatch("");
    // setGender("");
    // setExperience("");
   
      
  return (
    <div>
       <Base
    heading="batch Details"
    description="all user details"
    ></Base>
         <div className="main-card">
        {TeachersData.map((teachers, id) => (
          <div className="card-div" >
          <Card 
          key={teachers.id}>
            <CardContent className="content-div">
              <Typography gutterBottom variant="h5" component="div">
                Name:{teachers.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                batch :{teachers.Batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                gender:{teachers.Gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                experience:{teachers.yearsOfExperience}
              </Typography>
            </CardContent>
            <CardActions className="btn-div">
             <Button
               onClick={() =>history.push("/user")} 
                size="small"
                variant="contained"
                color="primary"
              >
                edit
              </Button>
              
              
             
             
              <Button
                onClick={() => deleteTeachersData(teachers)}
                size="small"
                variant="contained"
                color="error"
              >
                delete
                </Button>
              
             
            </CardActions>
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
     </div>
  )
}

export default UserDetails;