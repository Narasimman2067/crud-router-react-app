import { Button } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'





 export function WelcomePage ()  {
  return (
    <div>
      <Base>
      <div className='welcome-div'>
        <h1 >welcome to our App</h1>
        <div className="box-div">
        <nav>
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
    </nav>
   </div>
    </div>
    </Base>
   
   
    
    </div>
    
  
   
    
    
     
  )
}
 