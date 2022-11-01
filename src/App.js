import './App.css';
import Form from './component/Form';
import DisplayBoxes from './component/DisplayBoxes';
import {useState} from 'react';

function App() {

  const [boxes, setBoxes] = useState([
    {
        color : "blue",
    },
    {
        color : "red",
    },
    {
        color: "purple",
    }
])

const addToState = (newUserObj) => {
  console.log(newUserObj)
  setBoxes([...boxes, newUserObj])
}

  return (
    <>
    <div className="App">
      <Form addToState = {addToState}/>
      <DisplayBoxes boxes = {boxes} />
    </div>
    </>
  );
}

export default App;
