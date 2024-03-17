import "./Notfound.css"
import error from "../../assets/notfound.png"
import React from 'react'

const NotFound = () => {
  return (
    <div className="errorWrapper">
        <img  src={error} alt="pagenotfound"/>
    </div>
  )
}

export default NotFound