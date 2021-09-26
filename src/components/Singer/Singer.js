import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons'

import './Singer.css';

const Singer = (props) => {
    const {img, name, info, earning, birthDate, famousAs} = props.singer; 
    const icon = <FontAwesomeIcon icon={faMoneyBill} />
   
    return (
        
        <div className= 'container'>
                    
                    <div className='card-group'>
                        {/* card container */}
                        <div className="card">
                            {/* card image */}
                            <img src={img} className="card-img-top card-img" alt="..."/>
                            {/* card body */}
                            <div className="card-body">
                                <h5 className="card-title"><b>Name: {name}</b></h5>
                                <p><b>Date of Birth:</b> {birthDate}</p>
                                <p><b>Famous As:</b> {famousAs}</p>
                                <p className="card-text"><b>Info:</b> {info}</p>
                                <h4>Salary: ${earning}</h4>
                            </div>
                            {/* card footer */}
                            <div className="">
                            <button type="button" class="btn btn-success" onClick={() => props.handleBooking(props.singer)}>{icon} Book Now</button>
                            </div>
                        </div>
                    </div>    
        </div>
    );
};

export default Singer;