import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaRegCheckCircle, FaPlus } from "react-icons/fa"
import "./index.css"

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="row wd-main-content">
            <div class="col-12 wd-button-bar">
                <button class="btn wd-btn-gray float-end">< FaEllipsisV /></button>
                <div className="float-end wd-green-text"><FaRegCheckCircle className="wd-icon-green" /> Published</div>
            </div>
            <div className="col-12">
                Assignment Name
                <input value={assignment.title}
                    className="form-control mb-2" />
                <button onClick={handleSave} className="btn btn-success me-2 wd-btn-red float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn wd-btn-gray float-end">
                    Cancel
                </Link>
            </div>
        </div>
    );
}


export default AssignmentEditor;