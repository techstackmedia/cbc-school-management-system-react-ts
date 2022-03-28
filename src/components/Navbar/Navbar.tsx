import navbarStyle from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import userImg from "../../images/person-profile.jpeg";

const Navabar = () => {
  const navbarItems = [
    "Dashboard",
    "Schools",
    "Teachers",
    "Students",
    "Reports",
  ];

  const navbarItemsElem = navbarItems.map((item) => {
    return (
      <li key={item}>
        <Link to={item.toLowerCase()}>{item}</Link>
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
