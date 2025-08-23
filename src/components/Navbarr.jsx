import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

export default function Navbarr(props) {
    
  return (
     <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>     
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href ="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href ="#">{props.abouttext}</a>
        </li>

       
      </ul>
     <input type="radio" className="btn-check" onClick={props.togglemode} name="options-base" id="option5" autoComplete="off"  />
    <label className="btn" htmlFor="option5">white</label> 

    <input type="radio" className="btn-check"  onClick={props.togglemode}   name="options-base" id="option6" autoComplete="off" />
    <label className="btn" htmlFor="option6">black</label>

    <input type="radio" className="btn-check"  onClick={props.togglemode} name="options-base"  id="option7" autoComplete="off"  />
    <label className="btn" htmlFor="option7">blue</label>
      
    </div>
    </div>
    </nav>
  )
}

Navbarr.PropTypes={
  title:PropTypes.string.isRequired,
  abouttext:PropTypes.string.isRequired
}

Navbarr.defaultProps={
  title:"set title here",
  abouttext:"about texthere"

}
