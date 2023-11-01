import React from "react";
import { Link, useParams, useLocation, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import db from "../../../Database";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa"

function Navigation() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
    const links = ["Course Details", "Navigation"];
    return (
        <>
            <br />
            Drag and drop items to reorder them in the course navigation.
            <div className="wd-draggable">
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Home
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Modules <div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Piazza<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Zoom Meetings<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Assignments<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Quizzes<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Grades<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        People<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Panapto Video<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
            </div>
            <br />
            Drag items here to hide from students.
            Disabling most pages will cause students who visit to be redirected to the course home page.
            <div className="wd-draggable">
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Chat<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        SCORM<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Attendance<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Barnes and Noble Bookstore<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Digication<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Top Hat<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Syllabus<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
                <div class="row">
                    <div class="wd-draggable-element col-10 col-sm-7 col-xl-6">
                        Perusall<br />Page disabled, won't appear in navigation<div className="float-end"><FaEllipsisV /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;