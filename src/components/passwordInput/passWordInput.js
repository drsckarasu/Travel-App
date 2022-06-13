import { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ name, type, label }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError('Password must be at least 3 characters');
    } else if (e.target.value.length >= 20) {
      setPasswordError('Password can not be longer than 20 characters');
    } else {
      setPasswordError('');
    }
  };
  return (
    <label className="trip-popup__input input">
      <span className="input__heading">{label}</span>
      <input
        value={passwordInput}
        onChange={passwordInputHandler}
        name={name}
        type={type}
        autoComplete="new-password"
        required
        maxLength="20"
        minLength="3"
      />
      {passwordError && (
        <p style={{ color: 'red' }}>{passwordError}</p>
      )}
    </label>
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

PasswordInput.defaultProps = {
  name: '',
  type: '',
  label: '',
};
