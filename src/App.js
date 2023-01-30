
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Base from './Base/Base';
import DashBoard from './Components/DashBoard';
import Register from './Components/Register';
import { EmployeeDetails } from './Components/User';
import NoPage from './Components/NoPage';
import { WelcomePage } from './Components/WelcomePage';

function App() {
  return (
    <div className="App">
<Switch>

</Switch>

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
 <EmployeeDetails/>

</Route>
<Route path="/empty">
  <div className='nopage'>
  <NoPage/>
  </div>
 

</Route>










   </div>
  );
}

export default App;
