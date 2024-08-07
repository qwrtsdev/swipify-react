import React from 'react';
import ReactDOM from 'react-dom/client';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Card() {
    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="card-images">
                    <img src="" alt="" />
                </div>
                <div className="card-interactive">
                    <div className="interactive-info">
                        <p>Song Name</p>
                        <p>Artist Name</p>
                    </div>
                    <div className="interactive-buttons">
                        <button>
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faMusic} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;