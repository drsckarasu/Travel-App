import { Link } from 'react-router-dom';
import svgIcons from '../../constants/constants';

const ProfileNav = () => (
  <nav className="header__nav">
    <ul className="nav-header__list">
      <li className="nav-header__item" title="Bookings">
        <Link to="/bookings" className="nav-header__inner">
          <span className="visually-hidden">Bookings</span>
          <img src={svgIcons.calendarIcon} alt=" icon" />
        </Link>
      </li>
      <li className="nav-header__item" title="Profile">
        <div className="nav-header__inner profile-nav">
          <span className="visually-hidden">Profile</span>
          <img src={svgIcons.userIcon} alt="profile icon" />
          <ul className="profile-nav__list">
            <li className="profile-nav__item profile-nav__username">John Doe</li>
            <li className="profile-nav__item">
              <button className="profile-nav__sign-out button" type="button">Sign Out</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
);

export default ProfileNav;
