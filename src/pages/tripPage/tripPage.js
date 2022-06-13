/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../../components/modal/modal';

const TripPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const { trip } = location.state;
  const {
    image, title, duration, level, price, description,
  } = trip;

  return (

    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img src={image} className="trip__img" alt="trip image" />
        <div className="trip__content">
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
          <div className="trip__description">
            {description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong className="trip-price__value">{`${price} $`}</strong>
          </div>
          <button className="trip__button button" type="button" onClick={() => setOpenModal(true)}>Book a trip</button>
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          trip={trip}
        />
      )}
    </main>

  );
};

export default TripPage;
