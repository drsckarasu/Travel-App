import PropTypes from 'prop-types';

const TripsFilter = ({
  tripTitle,
  setTripTitle,
  setTripDuration,
  setTripLevel,
}) => {
  const titleHandler = (e) => {
    setTripTitle(e.target.value);
  };
  const durationHandler = (e) => {
    setTripDuration(e.target.value.split('_x_'));
  };
  const levelHandler = (e) => {
    setTripLevel(e.target.value);
  };

  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            value={tripTitle}
            onChange={titleHandler}
            name="search"
            type="search"
            placeholder="search by title"
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select name="duration" onChange={durationHandler}>
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x_100">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select name="level" onChange={levelHandler}>
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default TripsFilter;

TripsFilter.propTypes = {
  tripTitle: PropTypes.string,
  setTripTitle: PropTypes.func,
  setTripDuration: PropTypes.func,
  setTripLevel: PropTypes.func,
};

TripsFilter.defaultProps = {
  tripTitle: '',
  setTripTitle: () => {},
  setTripDuration: () => {},
  setTripLevel: () => {},
};
