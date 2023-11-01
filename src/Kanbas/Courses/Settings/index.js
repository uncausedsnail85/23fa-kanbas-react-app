import React from "react";
import { Link, useParams, useLocation, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import db from "../../Database";
import CourseDetails from "./CourseDetails";

function Settings() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const links = ["Course Details", "Navigation"];
    return (
        <>
            <ul class="nav nav-tabs">

                {links.map((link, index) => (
                    <li class="nav-item"><Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/Settings/${link}`}
                        className={`nav-link wd-hyperlink ${link === "Course Details" && "active"}`}>
                        {link}
                    </Link></li>
                ))}
            </ul>
            <Routes>
                <Route path="/" element={<Navigate to="CourseDetails" />} />
                <Route path="/CourseDetails" element={<CourseDetails />} />
                {/* <Route path="/Navigation/*" element={<Navigation />} /> */}
            </Routes>
        </>
    )
}

export default Settings;