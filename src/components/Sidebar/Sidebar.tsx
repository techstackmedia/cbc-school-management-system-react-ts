import { Link, Outlet } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";
import logo from "../../images/logo.jpeg";
import arrowSide from "../../images/arrowside.svg";

const Sidebar = () => {
  const sidebarItems = [
    "dashboard",
    "user management",
    "schools",
    "teachers",
    "students",
    "reports",
    "school",
    "teacher",
    "student",
    "attendance",
    "student attendance",
    "teacher attendance",
  ];

  const sidebarItemsElem = sidebarItems.map((item, index) => {
    return (
      <>
        <li className={sidebarStyle[`item${index}`]} key={index}>
          <Link
            to={item.replace(" ", "-")}
          >{`${item[0].toUpperCase()}${item.slice(1)}`}</Link>
        </li>
        <Outlet />
      </>
    );
  });

  return (
    <aside className={sidebarStyle.asideSidebar}>
      <div className={sidebarStyle.logoArrow}>
        <div>
          <img src={logo} width={60} height={60} alt="company logo" />
        </div>
        <div>
          <img src={arrowSide} width={26} height={26} alt="sidebar arrow" />
        </div>
      </div>
      <nav className={sidebarStyle.navSidebar}>
        <ul>{sidebarItemsElem}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
