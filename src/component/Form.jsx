import React, {useState} from 'react'

const Form = (props) => {

    //Form inputs
    const[color, setColor] = useState("");
    const[widthHeight, setWidthHeight] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {
            color: color,
            widthHeight : widthHeight
        }
        // console.log(newUser);
        props.addToState(newBox)
        setColor("");
        setWidthHeight("");
    }


  return (
    <fieldset>
        <div style={{display: "flex"}}>
            <form onSubmit={createBox} style={{display: "flex", alignItems:"center"}}>
            <label>Color:</label>
                <input onChange={(e) => {
                    setColor(e.target.value)
                }} value={color}/> <br />
                <label>Height and Width:</label>
                 <input onChange={(e) => {
                    setWidthHeight(e.target.value)
                }} value={widthHeight}/> <br />
                <button>Add</button>
            </form>
        </div>
    </fieldset>
  )
}

export default Form