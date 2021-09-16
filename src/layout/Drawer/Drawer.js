import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Drawer from '@material-ui/core/Drawer';


import Form from './Form/Form';




const Drawer1=({open,handleDrawerClose})=>{
    return (
        <>
           
      <Drawer
       
       variant="persistent"
       anchor="left"
       open={open}
       style={{width:'1000px'}}
      
     >
       <div
      
        >
        
          <div>

          <Form/>
          </div>
       </div>
       
       
     </Drawer>
        </>
    )
}

export default Drawer1
