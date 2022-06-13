import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignInput from '../signInput/SignInput';
import PasswordInput from '../passwordInput/passWordInput';

const SignForm = ({ name }) => {
  const reverseName = name === 'Up' ? 'In' : 'Up';

  return (
    <main className={`sign-${name.toLocaleLowerCase()}-page`}>
      <h1 className="visually-hidden">Travel App</h1>
      <form className={`sign-${name.toLocaleLowerCase()}-form`} autoComplete="off">
        <h2 className={`sign-${name.toLocaleLowerCase()}-form__title`}>{`Sign ${name}`}</h2>
        {name === 'Up' ? (
          <SignInput
            name="full-name"
            type="text"
            label="Full name"
          />
        ) : null}
        <SignInput
          name="email"
          type="email"
          label="Email"
        />
        <PasswordInput
          name="password"
          type="password"
          label="Password"
        />
        <button className="button" type="submit">{`Sign ${name}`}</button>
      </form>
      <span>
        Already have an account?
        <Link to={`/sign-${reverseName.toLocaleLowerCase()}`} className={`sign-${name.toLocaleLowerCase()}-form__link`}>{` Sign ${reverseName}`}</Link>
      </span>
    </main>
  );
};

export default SignForm;

SignForm.propTypes = {
  name: PropTypes.string,
};

SignForm.defaultProps = {
  name: '',
};
