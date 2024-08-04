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
            <div className="card-warpper">
                <div className="card-buttons">
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
                <div className="card-stacks">
                    
                </div>
            </div>
        </div>
    );
}

export default Card;