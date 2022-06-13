import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileNav from '../profileNav/profileNav';

const Header = () => {
  const [isProfileNavShown, setIsProfileNavShown] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/sign-up' || location.pathname === '/sign-in') {
      setIsProfileNavShown(false);
    } else {
      setIsProfileNavShown(true);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">Travel App</Link>
        {isProfileNavShown && <ProfileNav />}
      </div>
    </header>
  );
};

export default Header;
