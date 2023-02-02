import { AppBar, Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import React from "react";

function Base({ heading, description, children }) {
  // to navigate the buttons use the use hstory method
  const history = useHistory();
  return (
    <div>
      <AppBar position="static" className="toolbtn">
        <Toolbar variant="dense">

          <Button color="inherit" 
          onClick={() => history.push("/")}>
            <button className="btn-basic">🏠</button>
            
            <span>Home</span>
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/dashboard")}>
            <button className="btn-basic">🕎</button>
           
            <span>About</span>
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/user")}>
           
            <button className="btn-basic"
            onClick={() => history.push("/user")}
            >
              <span>👤</span></button>
            <span> User</span>
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/login")}>
            <button className="btn-basic">🔐</button>
            
            <span>Login</span>
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/view")}>
             <button className="btn-basic">🧑‍🏫</button>
           
            <span> UserDetails</span>
            
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/add")}>
             <button className="btn-basic">🧑‍🏫</button>
           
            <span>Add Data</span>
            
          </Button>
        </Toolbar>
      </AppBar>

      <div className="main-cpmponent">
        <header className="head-div">
          <h1>{heading}</h1>
        </header>
        <main>
          <h2 className="description-div">{description}</h2>
          <div className="children-segment">{children}</div>
        </main>
      </div>
    </div>
  );
}
export default Base;
