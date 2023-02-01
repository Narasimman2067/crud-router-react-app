import { Button} from '@mui/material'
import React from 'react'
import Base from '../Base/Base'


const Register = () => {
  return (
    <div>
      <Base>
      <div className='login-div'>
         
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
         </Base>
      </div>
   
  )
}

export default Register
