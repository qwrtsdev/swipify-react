import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

function BottomNavbar() {
    return (
        <div className="nav">
            <div className="lower-nav">
                <div className="lower-nav-wrapper">
                    <div className="">
                        <NavLink to='/' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to='*' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faGrip} />
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to='*' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faCrown} />
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to='*' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faComments} />
                        </NavLink>
                    </div>
                    <div className="">
                        <NavLink to='/profile' className='lower-nav-icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomNavbar;