import React from 'react'

import { Button } from '@mui/material'
import Base from '../Base/Base'

function  DashBoard (){
  return (
    <Base
     heading="Welcome to the Dashboard"
    description=" please click below the link to the home"
    >
        <Button 
        variant="contained" 
        color='primary'
        size='large'
        >
            Home
        </Button>
    </Base>
  )
}



export default DashBoard
