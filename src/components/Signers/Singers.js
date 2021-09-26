import './Singers.css';
import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';
import SingerBooking from '../SingerBooking/SingerBooking';

const Singers = () => {
    const [singers, setSinger] = useState([]);
    const [bookings, setBookings] = useState([]);
    useEffect( () => {
        fetch('/singersdb.JSON')
        .then(res => res.json())
        .then(data => displaySingers(data))
    } , []);
    
    const displaySingers = singers => {
        setSinger(singers);
    }

    const handleBooking = (booking) => {
        const newBooking = [...bookings, booking];
        setBookings(newBooking);
    }

    return (
        <div>
            <div className='two-col container'>
                <div className="singer-container grid container">
                    {
                        singers.map(singer => <Singer 
                            key= {singer.id}
                            singer= {singer} 
                            handleBooking={handleBooking}
                            />)
                    }

                </div>
                <div className='container singer-added'>
                    <SingerBooking bookings={bookings} />
                </div>
            </div>
        </div>
    );
};

export default Singers;