import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const SingerBooking = (props) => {
    const {bookings} = props;
    const userIcon = <FontAwesomeIcon icon={faUser} />

    const totalReducer = (previous, bookings) => previous + bookings.earning;
    const total = bookings.reduce(totalReducer, 0);
    return (
        <div>
            <h3>{userIcon} Singer Booked: {props.bookings.length}</h3>
            <p>Booking Cost: ${total.toFixed(2)}</p>
            <p>Singer Name: {props.bookings.name}</p>
        </div>
    );
};

export default SingerBooking;