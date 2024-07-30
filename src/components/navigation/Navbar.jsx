import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="nav">
            <div className="nav-wrapper">
                <div className="nav-logo">
                    <img className='swpflogo' src="./public/swipify-logo.png" alt="swipify logo" />
                </div>
                <div className="nav-button">
                    <a href="#"><FontAwesomeIcon icon={faBell} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSliders} /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;