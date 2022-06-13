import svgIcons from '../../constants/constants';

const Footer = () => (
  <footer className="footer">
    <span className="footer__text">
      from
      <a className="footer__link" href="https://binary-studio.com">binary studio</a>
      with
      <img className="footer__icon" src={svgIcons.heartIcon} alt="heart icon" />
    </span>
  </footer>
);

export default Footer;
