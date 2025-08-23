import React from 'react'
import { useState } from 'react' 


export default function Textform(props) {
    const [text,settext]=useState('enter text here')
    const [find,setfind]=useState('')

    const handleonchange =(event) =>
    {
        settext(event.target.value)  
     }

    
    const handleupclick =() =>{
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    
     const handleloclick =() =>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }

     const handleclearclick =() =>{
        let newtext = ('');
        settext(newtext)
    }

     const handleonchange2 =(event) =>
    {
        setfind(event.target.value)  
     }
    
    
     const handlefindclick =() =>{
       if(text.includes(find)){
        alert("present")
       }
       else{

        alert("not present")
       }
        
    }

    return (
    <>
    <div className=' container' >       
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className= {`form-control bg-${props.mode}`} style={{color:props.mode==='light'?'black':'white'}} value={text} onChange={handleonchange} id="mybox" rows="5" placeholder='enter your text here'></textarea>
    </div>
    
    <button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleclearclick}>Clear Text</button>
    </div>


<div className="container">
    <h2>Your text Summary</h2>
    <p>{text.split(' ').length} words  {text.length} characters </p>
    <p>{0.008 * text.split(' ').length}minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
 <textarea className= {`form-control bg-${props.mode}`} style={{color:props.mode==='light'?'black':'white'}}  value={find} onChange={handleonchange2} id="mybox2" rows="2" placeholder='enter your text here'></textarea>
  <button className="btn btn-primary mx-3" onClick={handlefindclick}>Find Text</button>
</div>



    </>
  )
}
