/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Trip = ({ trip }) => {
  const {
    image, title, duration, level, price,
  } = trip;

  return (
    <li className="trip-card">
      <img src={image} alt="trip image" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{duration}</strong>
              {' '}
              days
            </span>
            <span className="trip-info__level">{level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">
            {`${price} $`}
          </strong>
        </div>
      </div>
      <Link
        to={`/trip/${trip.id}`}
        className="button"
        state={{
          trip,
        }}
      >
        Discover a trip

      </Link>
    </li>
  );
};

export default Trip;

Trip.propTypes = {
  trip: PropTypes.object,
};

Trip.defaultProps = {
  trip: {},
};
