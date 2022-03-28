import { Link, Outlet } from "react-router-dom";
import sidebarStyle from "./Sidebar.module.css";
import logo from "../../images/logo.jpeg";
import arrowSide from "../../images/arrowside.svg";

const Sidebar = () => {
  const sidebarNavItems = [
    "Dashboard",
    "User Management",
    "Schools",
    "Teachers",
    "Students",
  ];

  const sidebarNavItemsElem = sidebarNavItems.map((item, index) => {
    return (
      <>
        <li className={sidebarStyle[`item${index}`]} key={index}>
          <Link to={item.toLowerCase().replace(" ", "-")}>{item}</Link>
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
        <ul>{sidebarNavItemsElem}</ul>
        <div>REPORTS</div>
        <ul>
          <li>
            School
            <ul>
              <li>
                <Link to="/school/school-distribution-by-state">
                  School Distribution by State
                </Link>
              </li>
              <li>
                <Link to="/school/school-distribution-by-lga">
                  School Distribution by LGA
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            Teacher
            <ul>
              <li>
                <Link to="/teacher/teachers-qualification">
                  Teachers Qualification
                </Link>
              </li>
              <li>
                <Link to="/teacher/qualification-by-school">
                  Qualification By School
                </Link>
              </li>
              <li>
                <Link to="/teacher/subject-distribution">
                  Subject Distribution
                </Link>
              </li>
              <li>
                <Link to="effective-report">
                  Effective Report
                  <ul>
                    <li>
                      <Link to="/teacher/effective-report/state-report">
                        State Report
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div>ATTENDANCE</div>
        <ul>
          <li>
            <Link to="student-attendance">Student Attendance</Link>
          </li>
          <li>
            <Link to="teacher-attendance">Teacher Attendance</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
