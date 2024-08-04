import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function DownNavbar() {
    return (
        <div className="nav">
            <div className="lower-nav">
                <div className="lower-nav-wrapper">
                    <div className="">
                        <a href='#' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                        </a>
                    </div>
                    <div className="">
                        <a href='#' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faGrip} />
                        </a>
                    </div>
                    <div className="">
                        <a href='#' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faCrown} />
                        </a>
                    </div>
                    <div className="">
                        <a href='#' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faComments} />
                        </a>
                    </div>
                    <div className="">
                        <a href='#' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownNavbar;