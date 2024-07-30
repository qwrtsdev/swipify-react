import React from 'react';
import ReactDOM from 'react-dom/client';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <a href='#' className='footer-icon'>
                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                </a>
                <a className='footer-icon'>
                    <FontAwesomeIcon icon={faGrip} />
                </a>
                <a href='#' className='footer-icon'>
                    <FontAwesomeIcon icon={faCrown} />
                </a>
                <a href='#' className='footer-icon'>
                    <FontAwesomeIcon icon={faComments} />
                </a>
                <a href='#' className='footer-icon'>
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <button className='footer-icon-mini'>
                    <FontAwesomeIcon icon={faAngleUp} />
                    <p>Swipe up</p>
                </button>
            </div>
        </div>
    );
}

export default Footer;