import React from 'react'
import './ErrorPage.css';
import { NavLink } from "react-router-dom"

function PageNotFound() {
  return (
    <div className='centered'>
      <h3>404 Not Found</h3>
      <p>please try again later or</p>
      <NavLink to='/' className="back-bttn">
          <div className="back-bttn-bg">
            <p>Back to Home</p>
          </div>
      </NavLink>
    </div>
  )
}

export default PageNotFound;