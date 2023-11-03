import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);

  // Course
  var id = db.courses[db.courses.length - 1]._id; // GET RS103
  id = Number(id.slice(2)) + 1; // GET 104
  // console.log("init id" + id.toString())

  const [course, setCourse] = useState({
    // "_id": "RS101",
    "name": "",
    // "number": "RS4550",
    "startDate": "2023-01-10",
    "endDate": "2023-05-15",
    "idNum": id
  });
  // console.log("init id: " + course.idNum)
  const addCourse = (course) => {
    const newCourses = [...courses, {
      ...course,
      number: "RS" + Math.floor(Math.random() * 9999).toString(),
      _id: "RS" + course.idNum
    }];
    setCourses(newCourses);

    // Reset
    // console.log("before add id: " + course.idNum)
    var id2 = Number(course.idNum) + 1;
    // console.log("after add id: " + id2)
    setCourse({
      "name": "",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15",
      "idNum": id2
    });
  };
  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course._id !== id);
    setCourses(newCourses);
  };
  const updateCourse = (course) => {
    const newCourses = courses.map((item) =>
      (item._id === course._id ? course : item));
    setCourses(newCourses);

    // Reset
    // console.log("before add id: " + course.idNum)
    var id2 = courses[courses.length - 1]._id;
    id2 = Number(id2.slice(2)) + 1;
    // console.log("after add id: " + id2)
    setCourse({
      "name": "",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15",
      "idNum": id2
    });
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
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
          </Routes>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;