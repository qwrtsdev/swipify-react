import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const warningToast = () => {
    toast.warn("This feature will be coming soon.");
}

function TopNavbar() {
    return (
        <div className="nav">
            <div className="upper-nav">
                <div className="upper-nav-wrapper">
                    <div className="upper-nav-logo">
                        <img className='swpflogo' src="./public/swipify-logo.png" alt="swipify logo" />
                    </div>
                    <div className="upper-nav-button">
                        <a onClick={warningToast} href="#"><FontAwesomeIcon icon={faBell} /></a>
                        <a onClick={warningToast} href="#"><FontAwesomeIcon icon={faSliders} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;