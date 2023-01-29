
import './App.css';
import Base from './Base/Base';
import { EmployeeDetails } from './Components/User';

function App() {
  return (
    <div className="App">
    <Base
    heading="User details"
    description="all user details"
    
    >
    <EmployeeDetails/>
   </Base>
   </div>
  );
}

export default App;
