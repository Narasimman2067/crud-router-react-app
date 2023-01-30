import { Button } from '@mui/material';
import React from 'react'
import Base from '../Base/Base'

function NoPage () {
  return (
    <Base 
    
    heading="sorry you lost your way"
   description=" please click below the link enter to home page"
   >
     <Button
               size='large'
                variant="contained"
                color="success"
              >
                Home
              </Button>


    </Base>
  )
}

export default NoPage;
