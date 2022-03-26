import { Link, Outlet } from "react-router-dom";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.footerFooter}>
      <nav className={footerStyle.navFooter}>
        <ul>
          <li>
            <span>2022 &copy;</span>
            <Link to="/">
              <span>CBC EMEA</span>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </footer>
  );
};

export default Footer;
