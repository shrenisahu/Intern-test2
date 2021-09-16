import React from 'react'
import "./HorizontalCard.css"
import {ImCross}from 'react-icons/im'
const HorizontalCard = ({users,Cross}) => {
    return (
      
         <div className="mainCont"> 
            {
                users.map((props)=>{
                   
                        return(
                            <>
                            <div className="outer-div">
                           <div className="div1">
                          
                           </div>
                           <div className="div2">

                           <h5 className="prop-title">  
                          
                           {props.title}
                            </h5>
<p className="prop-title">{props.body}</p>
                           </div>
                            <ImCross onClick={()=>Cross(props.id)} />
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
