import React from 'react'

export default function Rating(props) {
    
    const nubmerOfStars = Array(props.rating)

    return (
        
        <div>
       {
           [...nubmerOfStars].map(()=>{
               return <span className="fa fa-star checked"></span>
           } )
       }
        </div>
    )
}

