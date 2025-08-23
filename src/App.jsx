import { useState, useSyncExternalStore } from 'react'                      
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Textform from './components/Textform'

// import About from './components/About'

import Navbarr from './components/Navbarr'
import Alert from './components/Alert'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {  
const [mode,setmode]=useState('light');


const togglemode=(e) => {

  if(e.target.nextElementSibling.textContent === 'black'){
    setmode('dark')
    document.body.style.color='white',
        document.body.style.backgroundColor='teal '
        showalert('Dark mode enabled','success')
  }
  else if (e.target.nextElementSibling.textContent === 'white'){
    setmode('light')
    document.body.style.color='black',
      document.body.style.backgroundColor='white'
          showalert('Light mode enabled','success')
  }
  else {
     setmode('primary')
    document.body.style.color='white',

      document.body.style.backgroundColor='#517cc1ff' 
          showalert('blue mode enabled','success')
  }
}

const [alert,setalert]=useState(null);

const showalert  = (message,type) => { 
 setalert({
  msg:message,
  type:type
 })

setTimeout(()=>{
setalert(null)
},1000);
}               


  return (
    <>
   {/* <Router> */}
  <Navbarr title='Textutils' abouttext='about us'  mode={mode} togglemode={togglemode} />
  <Alert alert={alert} />
  <div className="container">
    {/* <Routes>
      <Route path="/about" element={<About />} /> */}
      
    
        <Textform heading="Enter the text to analyze" mode={mode} /> 

    {/* </Routes> */}
  </div>
{/* </Router> */}
 {/* <About />                                                      */}

</>


  );
}

export default App;                                       
