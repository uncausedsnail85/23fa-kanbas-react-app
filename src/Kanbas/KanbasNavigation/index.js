import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-profile-icon"/>,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" >
            <Link
                 className={`list-group-item `}>
                    <img src="../kanbas-nav-icon.png"></img></Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"} wd-bg-color-red`}>
                    {linkToIconMap[link]}<br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;

// <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>