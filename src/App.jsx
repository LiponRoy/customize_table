
import { useState } from 'react';
import './App.css'
import Topbar from './components/Topbar';
import MainTable from './components/MainTable';

function App() {
  // This useState for showing and hide checkboxes menu
const[toggle,setToggle]=useState(false)

  return (
    <>
    {/* passing toggle,setToggle as a props for controlling it from topbar component */}
      <Topbar toggle={toggle} setToggle={setToggle} />
    {/* passing setToggle as a props for controlling it from MainTable component */}
      <MainTable setToggle={setToggle}/>

      
    </>
  )
}

export default App
