import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import * as client from "./client";
import Signin from "./Users/signin"
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await client.findAllCourses();
    setCourses(response);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  // const [courses, setCourses] = useState(db.courses); // old db method
  // Course
  if (courses.length > 1) {
    var id = courses[courses.length - 1]._id; // GET RS103
    id = Number(id.slice(2)) + 1; // GET 104
  }
  // console.log("init id" + id.toString())

  const [course, setCourse] = useState({
    // "_id": "RS101",
    "name": "",
    "number": "",
    "startDate": "2023-01-10",
    "endDate": "2023-05-15",
    "idNum": id
  });
  // console.log("init id: " + course.idNum)
  const addCourse = async () => {
    const response = await client.addCourse(course);
    // add respose to browser side courses
    setCourses([response, ...courses]);
    //Reset Course
    setCourse({ name: "" });
  };
  const deleteCourse = async (course) => {
    const response = await client.deleteCourse(course);
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    const response = await client.addCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
      <div className="wd-flex-row-container">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div class="wd-flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={
              <Courses />} />
          </Routes>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;