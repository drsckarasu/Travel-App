import { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, trip }) => {
  const [guestNumber, setGuestNumber] = useState(1);
  const [timeInput, setTimeInput] = useState('');
  const [datePickerError, setDatePickerError] = useState('');
  const {
    price,
    level,
    title,
    duration,
  } = trip;
  const totalPriceHandler = (e) => {
    setGuestNumber(e.target.value);
  };
  const timeHandler = (e) => {
    const dateNow = new Date();
    if ((new Date(e.target.value).getTime() < dateNow.getTime())
    || (new Date(e.target.value).getDate() === dateNow.getDate())) {
      setDatePickerError('You must choose date in future');
    } else {
      setDatePickerError('');
    }
    setTimeInput(e.target.value);
  };

  return (
    <div className="modal">
      <div className="trip-popup">
        <button className="trip-popup__close" type="button" onClick={() => closeModal(false)}>×</button>
        <form className="trip-popup__form" autoComplete="off">
          <div className="trip-info">
            <h3 className="trip-info__title">{title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration">
                <strong>{`${duration} `}</strong>
                days
              </span>
              <span className="trip-info__level">{level}</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input
              name="date"
              type="date"
              onChange={timeHandler}
              value={timeInput}
              required
            />
          </label>
          {datePickerError && (
            <p style={{ color: 'red' }}>{datePickerError}</p>
          )}
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input value={guestNumber} onChange={totalPriceHandler} name="guests" type="number" min="1" max="10" required />
          </label>
          <span className="trip-popup__total">
            Total:
            <output className="trip-popup__total-value">{`${price * guestNumber} $`}</output>
          </span>
          <button className="button" type="submit">Book a trip</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
  trip: PropTypes.object,
};

Modal.defaultProps = {
  closeModal: () => {},
  trip: {},
};
