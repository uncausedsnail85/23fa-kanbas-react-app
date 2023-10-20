import { Link, useLocation } from "react-router-dom";
import db from "../Database";
import { FaBars, FaRegEdit } from "react-icons/fa"
import "./index.css"

function Dashboard() {
  const courses = db.courses;
  const { pathname } = useLocation();
  return (
    <div>
      <div class="wd-course-mobile-header d-block d-md-none">
        <div class="row">
          <div class="col-auto text-center">
            <FaBars />
          </div>
          <div class="col text-center">
            Dashboard
          </div>
          <div class="col-auto">
            👓   <a href="/kanbas/course-nav.html"><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="wd-dashboard-header d-none d-sm-block">
        <h3>Dashboard</h3>
        <hr />
      </div>
      <div className="d-flex flex-wrap wd-dashboard-content">
        {courses.map((course) => (
          <>
            <div class="card wd-dashboard-card">
              <div class="w-100 bg-success text-white" style={{ height: 146 }}></div>
              <div class="card-body">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                  <h5 class="card-title text-truncate">{course.name}</h5>
                  <p class="card-text text-truncate">{course.number}</p>
                  <p class="card-subtitle mb-2 text-muted text-truncate">{course._id}</p>
                </Link>
                <a href={pathname} class="btn btn-primary wd-btn-transparent"><FaRegEdit /></a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;