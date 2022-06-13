import { useState, useEffect } from 'react';
import data from '../../database/database.json';
import Booking from '../../components/booking/booking';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    setBookings(data.bookingsList);
  }, []);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .map((booking) => (
            <Booking
              key={booking.id}
              booking={booking}
              bookings={bookings}
              setBookings={setBookings}
            />
          ))}
      </ul>
    </main>
  );
};

export default Bookings;
