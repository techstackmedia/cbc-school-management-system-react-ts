import { Link, Outlet } from 'react-router-dom';
import sidebarStyle from './Sidebar.module.css';
import logo from '../../images/logo.jpeg';
import arrowSide from '../../images/arrowside.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Sidebar = () => {
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
        <div className={sidebarStyle.navSidebarDashboard}>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <ul className={sidebarStyle.navSidebarCore}>
          <li>
            <Link to="/user-management"><HomeIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} /> User Management</Link>
          </li>
          <li>
            <Link to="/schools"><AspectRatioIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Schools</Link>
          </li>
          <li>
            <Link to="/teachers"><AspectRatioIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Teachers</Link>
          </li>
          <li>
            <Link to="/students"><AspectRatioIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Students</Link>
          </li>
        </ul>

        <div className={sidebarStyle.navSidebarMain}>REPORTS</div>
        <ul className={sidebarStyle.navSidebarSchool}>
          <li>
            <span><AssessmentIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />School <ArrowForwardIosIcon
              style={{
                position: 'absolute',
                right: 15,
                color: '#5c5e8',
                fontSize: '0.7rem',
                flex: '0 0 20px',
              }}
            /></span>
            <ul className={sidebarStyle.navSidebarSchoolDistribution}>
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
        <ul className={sidebarStyle.navSidebarTeacher}>
          <li>
            <span><AssessmentIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Teacher  <ArrowForwardIosIcon
              style={{
                position: 'absolute',
                right: 15,
                color: '#5c5e8',
                fontSize: '0.7rem',
                flex: '0 0 20px',
              }}
            /></span>
            <ul className={sidebarStyle.navSidebarTeacher1}>
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
                <Link to="effective-report">Effective Report</Link>
                <ul className={sidebarStyle.navSidebarEffectiveReport}>
                  <li>
                    <Link to="/teacher/effective-report/state-report">
                      State Report
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span><AssessmentIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Student <ArrowForwardIosIcon
              style={{
                position: 'absolute',
                right: 15,
                color: '#5c5e8',
                fontSize: '0.7rem',
                flex: '0 0 20px',
              }}
            /></span>{' '}
            
            <ul className={sidebarStyle.navSidebarStudent}>
              <li>Distribution by Gender, Class and School</li>
              <li>Dropout Risk Analysis</li>
            </ul>
          </li>
        </ul>
        <div className={sidebarStyle.navSidebarMain}>ATTENDANCE</div>
        <ul className={sidebarStyle.navSidebarAttendance}>
          <li>
            <Link to="student-attendance"><AspectRatioIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Student Attendance</Link>
          </li>
          <li>
            <Link to="teacher-attendance"><AspectRatioIcon style={{fontSize: '1.3rem', display: 'flex', marginRight: '15px'}} />Teacher Attendance</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </aside>
  );
};

export default Sidebar;
