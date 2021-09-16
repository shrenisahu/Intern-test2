import React from 'react'

const HorizontalCard = ({users}) => {
    return (
        <div>
         
            {
                users.map((props)=>{
                    return(
                        <div class="card">
                        <div class="card-body">
                     <h5>   {props.title}</h5>
                     <p>{props.body}</p>
                        </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default HorizontalCard
