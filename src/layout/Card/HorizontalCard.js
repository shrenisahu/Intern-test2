import React from 'react'
import "./HorizontalCard.css"
import {ImCross}from 'react-icons/im'
const HorizontalCard = ({users}) => {
    return (
      
         <div className="mainCont"> 
            {
                users.map((props)=>{
                   
                        return(
                            <>
                            <div className="outer-div">
                           <div className="div1">
                           {/* <img src="https://source.unsplash.com/user/erondu" alt="Avatar" className="avatar1"/> */}
                           </div>
                           <div className="div2">

                           <h5 className="prop-title">  
                          
                           {props.title}
                            </h5>
<p className="prop-title">{props.body}</p>
                           </div>
                            <ImCross />
                            </div>
                            </>
                        )
                }
                )
            }
            </div>
       
    )
}

export default HorizontalCard
