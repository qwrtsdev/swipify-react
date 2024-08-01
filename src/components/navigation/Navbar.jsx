import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className="nav">
            <div className="upper-nav">
                <div className="upper-nav-wrapper">
                    <div className="upper-nav-logo">
                        <img className='swpflogo' src="./public/swipify-logo.png" alt="swipify logo" />
                    </div>
                    <div className="upper-nav-button">
                        <a href="#"><FontAwesomeIcon icon={faBell} /></a>
                        <a href="#"><FontAwesomeIcon icon={faSliders} /></a>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <div className="lower-nav-wrapper">
                    <a href='#' className='lower-nav-icon'>
                        <FontAwesomeIcon icon={faHeadphonesSimple} />
                    </a>
                    <a href='#' className='lower-nav-icon'>
                        <FontAwesomeIcon icon={faGrip} />
                    </a>
                    <a href='#' className='lower-nav-icon'>
                        <FontAwesomeIcon icon={faCrown} />
                    </a>
                    <a href='#' className='lower-nav-icon'>
                        <FontAwesomeIcon icon={faComments} />
                    </a>
                    <a href='#' className='lower-nav-icon'>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;