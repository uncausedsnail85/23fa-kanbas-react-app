import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV, FaRegTrashAlt, FaPlus, FaRegEdit } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, setAssignment, } from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    // const assignments = db.assignments;
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const dispatch = useDispatch();
    return (
        <>
            <div class="row wd-main-content" style={{ padding: 16 }}>
                <div class="col-12 wd-button-bar">
                    <button class="btn wd-btn-gray float-end">< FaEllipsisV /></button>

                    <button class="btn wd-btn-red float-end"
                        onClick={() => {
                            dispatch(setAssignment({ "_id": "New", "title": "", "course": "" }))
                            navigate(`/Kanbas/Courses/${courseId}/Assignments/New`)
                        }}>
                        <FaPlus /> Assignment
                    </button>
                    <button class="btn wd-btn-gray float-end"><FaPlus /> Group</button>
                    <input class="form-control" id="name" placeholder="Search for Assignment" style={{ width: 300 }} />

                </div>
            </div>
            <div>
                <div className="list-group">
                    {courseAssignments.map((assignment) => (
                        <ul className="list-group wd-course-ul">
                            <li className="list-group-item list-group-item-secondary">
                                <div class="d-flex flex-row">
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="list-group-item flex-grow-1">
                                        <GiNotebook className="wd-icon-green" /> {assignment.title}
                                    </Link>
                                    <button className="float-end btn wd-btn-transparent-module"
                                        onClick={() => {
                                            dispatch(setAssignment(assignment))
                                            navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`)
                                        }}>
                                        <FaRegEdit />
                                    </button>
                                    <button className="float-end btn wd-btn-transparent-module"
                                        onClick={() => {
                                            dispatch(deleteAssignment(assignment._id));
                                        }}>
                                        <FaRegTrashAlt />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Assignments;