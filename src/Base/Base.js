import { AppBar, Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import React from "react";

function Base({ heading, description, children }) {
  // to navigate the buttons use the use hstory method
  const history = useHistory();
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button color="inherit"
          onClick={()=>history.push("/")}
          >Home</Button>
          <Button color="inherit"
           onClick={()=>history.push("/dashboard")}>About</Button>
          <Button color="inherit"
           onClick={()=>history.push("/user")}>User</Button>
          <Button color="inherit"
           onClick={()=>history.push("/login")}>login or signup</Button>
         <Button color="inherit"
          onClick={()=>history.push("/view")}>UserDetails</Button>
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
