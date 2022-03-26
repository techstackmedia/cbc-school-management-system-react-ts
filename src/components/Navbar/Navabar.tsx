import navbarStyle from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import userImg from "../../images/person-profile.jpeg";

const Navabar = () => {
  const navbarItems = [
    "dashboard",
    "schools",
    "teachers",
    "students",
    "reports",
  ];

  const navbarItemsElem = navbarItems.map((item) => {
    return (
      <li>
        <Link to={item}>{`${item[0].toUpperCase()}${item.slice(1)}`}</Link>
      </li>
    );
  });

  return (
    <header className={navbarStyle.headerNavbar}>
      <nav className={navbarStyle.navNavbar}>
        <div className={navbarStyle.navbarItemImg}>
          <ul>{navbarItemsElem}</ul>
          <div>
            <span className={navbarStyle.hi}>Hi,</span>
            <span className={navbarStyle.userName}>Jerry</span>
            <img src={userImg} alt="user profile" />
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Navabar;
