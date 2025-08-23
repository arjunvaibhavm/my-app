import React from 'react'


export default function Alert(props) {
    const capitalize =(text) => {
    const val=text;
    return val.charAt(0).toUpperCase() + val.slice(1);
    }
  return (
    
     props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
          {capitalize(props.alert.type)}: {capitalize (props.alert.msg)}
        </div>
   
  )
}
