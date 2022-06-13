import PropTypes from 'prop-types';
import Trip from '../trip/trip';

const Trips = ({ trips }) => (
  <section className="trips">
    <h2 className="visually-hidden">Trips List</h2>
    <ul className="trip-list">

      {(trips.length === 0 && (
      <p style={{ color: 'red' }}>There are no content</p>
      ))
      || trips.map((trip) => (
        <Trip
          key={trip.id}
          trip={trip}
        />
      ))}
    </ul>
  </section>
);

export default Trips;

Trips.propTypes = {
  trips: PropTypes.array,
};

Trips.defaultProps = {
  trips: [],
};
