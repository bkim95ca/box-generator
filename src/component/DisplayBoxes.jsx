import React from 'react'

const DisplayBoxes = (props) => {

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>{
            props.boxes.map((boxes, index) => {
                return <div key={index}>
                <div style={{backgroundColor: boxes.color, padding: boxes.widthHeight+"px"}}> 
                </div>
                </div>
            })
        }</div>
      )
}

export default DisplayBoxes