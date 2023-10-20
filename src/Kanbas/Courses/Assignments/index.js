import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV, FaRegCheckCircle, FaPlus } from "react-icons/fa"
import {GiNotebook} from "react-icons/gi"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div class="row wd-main-content" style={{ padding: 16 }}>
                <div class="col-12 wd-button-bar">
                    <button class="btn wd-btn-gray float-end">< FaEllipsisV /></button>
                    <button class="btn wd-btn-red float-end"><FaPlus /> Assignment</button>
                    <button class="btn wd-btn-gray float-end"><FaPlus /> Group</button>
                    <input class="form-control" id="name" placeholder="Search for Assignment" style={{ width: 300 }} />

                </div>
            </div>
            <div>
                <div className="list-group">
                    {courseAssignments.map((assignment) => (
                        <ul className="list-group wd-course-ul">
                            <li className="list-group-item list-group-item-secondary">
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item">
                                    <GiNotebook className="wd-icon-green"/> {assignment.title}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Assignments;