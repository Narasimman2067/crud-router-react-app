import { Button, TextField } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'
import "./Style.css"

const Register = () => {
  return (
    <div>
    <div className='color-div'>
         
    <h1>
    please log in or sign up
    </h1>
    <h3>
    Authetication page
    </h3>
   
    <div className='search'>
    <Button variant="contained" color="primary">
        login
      </Button>
      <Button variant="contained" color="secondary" size='large'>
        signup
      </Button>
    </div>
        
           
           </div>
        
       
   
    </div>
   
  )
}

export default Register
