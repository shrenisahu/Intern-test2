import React, { useState } from 'react'
import "./leftPanel.css"

import Drawer from './Drawer/Drawer';
const LeftPanel = (props) => {
    const{ Toggle,stateChange}=props;
    const [slide,setSlider]=useState(false)


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(!open);
      console.log(open)
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  



    return (
        <div>
        {open?<Drawer open={open} handleDrawerClose={handleDrawerClose}  />:null}
           <div  style={{width: '18rem'}} className="main-div">
           <div className='img-div'>
           <img src="https://source.unsplash.com/user/erondu" alt="Avatar" class="avatar"/>
           </div>
           <div className="inner-div">

           <h5>Hi Readers</h5>
           <p>Here's your News!</p>
           </div>
          
</div>


<div class="card" className="toggle-div">
 <h3>View Toggle</h3>
  <div class="card-body">
    
  <label class="switch">
  <input type="checkbox"/>
  <span class="slider" onClick={Toggle}></span>
</label>

   
  </div>
</div>





            <div class="card" className="toggle-div">
 
  <div class="card-body">
    <h5 class="card-title">Have a feedback?</h5>
   
    

    <div className="listen" onClick={handleDrawerOpen}>
      <h5>We are listening</h5>
    </div>
    
  </div>
</div>






        </div>
    )
}

export default LeftPanel
