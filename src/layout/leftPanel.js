import React from 'react'
import "./leftPanel.css"
const LeftPanel = (props) => {
    const{ Toggle,stateChange}=props;
    return (
        <div>
           <div  style={{width: '18rem'}} className="main-div">
           <div className='img-div'>
           <img src="https://source.unsplash.com/user/erondu" alt="Avatar" class="avatar"/>
           </div>
           <h5>Hi Readers</h5>
           <p>Here's your News!</p>
          
</div>




            <button onClick={Toggle}>toggle</button>




            <div class="card">
 
  <div class="card-body">
    <h5 class="card-title">Have a feedback</h5>
   
    <a href="#" class="btn btn-primary">We are listening</a>
  </div>
</div>






        </div>
    )
}

export default LeftPanel
