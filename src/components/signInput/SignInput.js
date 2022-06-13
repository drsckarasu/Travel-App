import PropTypes from 'prop-types';

const SignInput = ({ name, type, label }) => (
  <label className="trip-popup__input input">
    <span className="input__heading">{label}</span>
    <input
      name={name}
      type={type}
      required
    />
  </label>
);

export default SignInput;

SignInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

SignInput.defaultProps = {
  name: '',
  type: '',
  label: '',
};
