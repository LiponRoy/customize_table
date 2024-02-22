
import { useState } from 'react';
import './App.css'
import Topbar from './components/Topbar';
import MainTable from './components/MainTable';

function App() {
  // This useState for showing and hide checkboxes menu
const[toggle,setToggle]=useState(false)

const [column1, setColumn1] = useState(false);
const [column2, setColumn2] = useState(false);
const [column3, setColumn3] = useState(false);
const [column4, setColumn4] = useState(false);
const [column5, setColumn5] = useState(false);

console.log(column1)
console.log(column2)
console.log(column3)

const set1=(e)=>{
  setColumn1(e.target.checked)
}



  return (
    <>
    {/* passing toggle,setToggle as a props for controlling it from topbar component */}
      <Topbar toggle={toggle} setToggle={setToggle} setColumn1={setColumn1}
					setColumn2={setColumn2}
					setColumn3={setColumn3}
					setColumn4={setColumn4}
					setColumn5={setColumn5} set1={set1} />
    {/* passing setToggle as a props for controlling it from MainTable component */}
      <MainTable setToggle={setToggle} column1={column1}
					column2={column2}
					column3={column3}
					column4={column4}
					column5={column5} />

      
    </>
  )
}

export default App
