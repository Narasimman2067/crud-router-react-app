
import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';
import "./Style.css"
import DashBoard from './Components/DashBoard';
import Register from './Components/AuthPage';
import { EmployeeDetails } from './Components/User';
import NoPage from './Components/NoPage';
import { WelcomePage } from './Components/WelcomePage';

import {UserDetails} from './Components/UserDetails';
import { EmployeesProfile } from './Components/EmployeesProfile';
import { useState } from 'react';
import { data } from './Data/data';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import UpdateStudents from './Components/UpdateStudents';

function App() {
  const [employeesData,setEmployees]=useState(data)
  const [TeachersData, setTeachers] = useState(data);
  return (
    <div className="App">
      

     
<Switch>
<Route exact path="/">
 
 <WelcomePage/>
 </Route>


 
 <Route path="/dashboard">
   <DashBoard/>
 
 </Route>
 <Route path="/login">
  <Register/>
 
 </Route>
 
 <Route path="/user">
  
  <EmployeeDetails 
  employeesData={employeesData} 
  setEmployees={setEmployees}/>
 
 </Route>
 <Route path="/add">
  <AddStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>
 <Route path="/update">
  <UpdateStudents
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>
 <Route path="/edit/:id/:employeeid">
  <EditStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>
 
 
 <Route path="/details">
  <Redirect to="/user"/>
  <EmployeeDetails/>
 
 </Route>

 <Route path="/teacher/:id">
  <UserDetails TeachersData={TeachersData}/>

 </Route>
 <Route path="/employee/:id">
  <EmployeesProfile employeesData= {employeesData}/>

 </Route>

 <Route path="**">
  
   <NoPage/>
   
  </Route>
 

</Switch>











   </div>
  );
}

export default App;
