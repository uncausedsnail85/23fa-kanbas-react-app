import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaRegCheckCircle, FaPlus } from "react-icons/fa"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    // const assignment = db.assignments.find(
    //     (assignment) => assignment._id === assignmentId);
    var isNew = false;
    if (assignmentId === "New") {
        isNew = true;
    }
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const { courseId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    return (
        
        <div class="row wd-main-content">
            
            <div class="col-12 wd-button-bar">
                <button class="btn wd-btn-gray float-end">< FaEllipsisV /></button>
                <div className="float-end wd-green-text"><FaRegCheckCircle className="wd-icon-green" /> Published</div>
            </div>
            <div className="col-12">
                Assignment Title
                <input value={assignment.title}
                    onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                    className="form-control mb-2" />
                {isNew && <button className="btn btn-success me-2 wd-btn-red float-end"
                    onClick={() => {
                        dispatch(addAssignment({ ...assignment, course: courseId }));
                        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                    }}>
                    Add New
                </button>}
                {!isNew && <button className="btn btn-success me-2 wd-btn-red float-end"
                    onClick={() => {
                        dispatch(updateAssignment({ ...assignment, course: courseId }));
                        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                    }}>
                    Edit
                </button>}
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn wd-btn-gray float-end">
                    Cancel
                </Link>
            </div>
        </div>
    );
}


export default AssignmentEditor;