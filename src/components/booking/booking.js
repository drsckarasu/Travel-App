import PropTypes from 'prop-types';

const Booking = ({ booking, bookings, setBookings }) => {
  const {
    guests, totalPrice, trip, date,
  } = booking;
  const day = new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate();
  const month = new Date(date).getMonth() < 9 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  const deleteHandler = () => {
    setBookings(bookings.filter((el) => el.id !== booking.id));
  };

  return (
    <li className="booking">
      <h3 className="booking__title">{trip.title}</h3>
      <span className="booking__guests">{`${guests} guests`}</span>
      <span className="booking__date">{`${day}.${month}.${year}`}</span>
      <span className="booking__total">{`${totalPrice} $`}</span>
      <button className="booking__cancel" title="Cancel booking" type="button" onClick={deleteHandler}>
        <span className="visually-hidden">Cancel booking</span>
        ×
      </button>
    </li>
  );
};

export default Booking;

Booking.propTypes = {
  booking: PropTypes.object,
  bookings: PropTypes.array,
  setBookings: PropTypes.func,
};

Booking.defaultProps = {
  booking: {},
  bookings: [],
  setBookings: () => {},
};
