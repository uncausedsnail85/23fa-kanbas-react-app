import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import db from "../Database";
import { FaBars, FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import "./index.css"

function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }
) {
  // const courses = db.courses;
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
        {/* <div>
          <input
            value={course.name}
            placeholder="Course Name"
            onChange={(e) =>
              setCourse({
                ...course,
                name: e.target.value,
              })
            } />
          <button className="btn wd-btn-gray" onClick={() => addCourse(course)}>Add</button>
          <button className="btn wd-btn-gray" onClick={() => updateCourse(course)}>
            Update </button>
        </div> */}
      </div>
      <div className="d-flex flex-wrap wd-dashboard-content">
        {courses.map((course) => (
          <>
            <div class="card wd-dashboard-card">
              <div class="w-100 bg-success text-white" style={{ height: 146 }}></div>
              <div class="card-body">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-link">
                  <h5 class="card-title text-truncate">{course.name}</h5>
                  <p class="card-text text-truncate">Course Number: {course.number}</p>
                  <p class="card-subtitle mb-2 text-muted text-truncate">ID: {course._id}</p>
                </Link>
                <button type="button"
                  class="btn wd-btn-transparent-dashboard"
                  onClick={() => setCourse(course)}>
                  <FaRegEdit />
                </button>
                <button type="button"
                  class="btn wd-btn-transparent-dashboard float-end"
                  onClick={() => deleteCourse(course)}>
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div class="row">
        <div class="col-10 col-sm-7 col-xl-6 ">
          <h3>Course:</h3>
          <div class="form-group form-inline">
            <label for="coursename">Name</label>
            <input value={course.name} className="form-control" placeholder="Course Name" id="coursename"
              onChange={(e) => setCourse({ ...course, name: e.target.value })} />

            <label for="startdate">Start date</label>
            <input value={course.startDate} className="form-control" type="date" id="startdate"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

            <label for="enddate">Start date</label>
            <input value={course.endDate} className="form-control" type="date" id="enddate"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button className="btn wd-btn-red" onClick={() => addCourse()}>Add</button>
            <button className="btn wd-btn-gray" onClick={() => updateCourse(course)}>
              Update </button>
          </div>
        </div>
      </div>


    </div>
  );
}
export default Dashboard;