import React, { useState } from 'react'
import LeftPanel from './leftPanel'
import RightPanel from './rightPanel'
import './mainPanel.css'
const MainPanel = () => {
    const[stateChange,setChange]=useState(false);
    const[width,setWidth]=useState('22px');
    const[drawer,setDrawer]=useState(false);
    const Toggle=()=>{
        setChange(!stateChange);
        console.log("pp")
    }
    return (
        <div className='main-div'>
      
        <div className='left-div' >

           <LeftPanel Toggle={Toggle} stateChange={stateChange}/> 
        </div>
        <div className='right-div'>

           <RightPanel Toggle={Toggle} stateChange={stateChange}/>
        </div>
        </div>
    )
}

export default MainPanel
