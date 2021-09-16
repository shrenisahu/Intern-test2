import React from 'react'
import "./HorizontalCard.css"
const HorizontalCard = ({users}) => {
    return (
        <div>
         
            {
                users.map((props)=>{
                   
                        return(
                            <div className="outer-div">
                            <div className="img-div1">
                            <img src="https://source.unsplash.com/user/erondu" alt="Avatar" className="avatar1"/>
                            </div>
<div>
{/* <h5 className="prop-title">   {props.title}</h5> */}
{/* <p className="prop-title">{props.body}</p> */}
</div>

                            </div>
                        )
                }
                )
            }
        </div>
    )
}

export default HorizontalCard
