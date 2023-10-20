import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaEllipsisV, FaRegCheckCircle, FaPlus } from "react-icons/fa"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <>
      <div class="row wd-main-content">
        <div class="col-12 wd-button-bar">
          <button class="btn wd-btn-gray float-end">< FaEllipsisV /></button>
          <button class="btn wd-btn-red float-end"><FaPlus /> Module</button>
          <div class="dropdown float-end">
            <button class="btn wd-btn-gray dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <FaRegCheckCircle className="wd-icon-green" /> Publish
              All
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Publish All</a></li>
              <li><a class="dropdown-item" href="#">Publish All Items and Modules</a></li>
              <li><a class="dropdown-item" href="#">Unpublish</a></li>
            </ul>
          </div>
          <button class="btn wd-btn-gray float-end">View Progress</button>
          <button class="btn wd-btn-gray float-end" onclick="window.location.href='#';">Collapse
            All</button>
        </div>
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <ul className="list-group wd-course-ul">
                <li key={index} className="list-group-item list-group-item-secondary">
                  <h3>{module.name}</h3>
                </li>
                <li key={index} className="list-group-item">
                  <p>{module.description}</p>
                </li>
              </ul>
            ))
        }
      </div>
    </>);
}
export default ModuleList;

