import React from 'react'
import {ImCross}from 'react-icons/im'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './VerticalCard.css'
const VerticalCard = ({users}) => {
    return (
        < >
        {
          users.map((props)=>{
            return(

              <div className=" div-container" style={{width: "18rem",height:'280px'}}>
     <div >
     <div className="cross-icon">

<ImCross />
     </div>
    <h5 key={props.id} className="title">{props.title}</h5>
    <p className="title1">{props.body}</p>
    <span className="date">Mon,21 Dec 2020 14:57 GMT</span>
    <img src="https://source.unsplash.com/user/erondu/230x90" />
   
    &nbsp;&nbsp;
  
</div>
</div> 

            )
          })
        }
        </>
    )
}

export default VerticalCard
