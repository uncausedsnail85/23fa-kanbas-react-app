import React from "react";
import { Link, useParams, useLocation, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import db from "../../../Database";
import "./index.css";

function CourseDetails() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
    const links = ["Course Details", "Navigation"];
    return (
        <>
            <h3>Course Details</h3>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Image:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <div className="wd-image-box  d-flex align-items-center justify-content-center">
                        <button >Choose Image</button></div></div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Name:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    {course.name}
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Course Code:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    {courseId}
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Blueprint Course:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    No
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Course Template:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <button type="button" class="btn wd-btn-gray" disabled>Enable course as a Course Template</button>
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Time Zone:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <select class="form-select">
                        <option selected>Eastern Time (US & Canada) (-5/-4)</option>
                        <option >Western Time (US & Canada) (-8/-7)</option>
                    </select>
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    SIS ID:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    {courseId}
                </div>
            </div>
            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Term:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    {course.startDate}
                </div>
            </div>
            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Participation:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <select class="form-select">
                        <option selected>Term</option>
                    </select> <br />
                    Course participation is limited to term start and end dates.<br />
                    <label for="startdate">Start</label><br />
                    <input type="date" id="startdate" /><br />
                    <label for="enddate">End</label><br />
                    <input type="date" id="enddate" /><br />
                    <input type="checkbox" value="RESTRICTSTART" /> Restrict students from viewing course before term start date <br />
                    <input type="checkbox" value="RESTRICTEND" /> Restrict students from viewing course before term end date
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Default due time:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <select id="duetime" class="form-select">
                        <option selected value="DEFAULT">Account default (11:59pm)</option>
                    </select>
                    <br />
                    This influences the user interface for setting due dates. It does not change the time for any existing assignments.
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Language:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <select id="language" class="form-select">
                        <option selected value="NOTSET">Not set</option>
                    </select>
                    <br />
                    This will override any user/system language preference. This is only recommended for foreign language courses.
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    File Storage:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    10000 megabytes
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Large Course:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="largecourse" />
                        <label class="form-check-label" for="largecourse">
                            Launch SpeedGrader Filtered by Student Group
                        </label>
                    </div>
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Grading Scheme:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="gradingscheme" />
                        <label class="form-check-label" for="gradingscheme">
                            Enable course grading scheme
                        </label>
                    </div>
                </div>
            </div>


            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    License:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <select id="license" class="form-select">
                        <option selected value="PRIVATE">Private (Copyrighted)</option>
                    </select>
                </div>
            </div>

            <div class="row wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                File Copyright:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="COYRIGHT" />
                        <label class="form-check-label" for="COYRIGHT">
                        Copyright and license information must be provided for files before they are published.
                        </label>
                    </div>
                </div>
            </div>

            <div class="row align-items-center wd-course-setting-row ">
                <div class="col-2 wd-course-setting-col1">
                    Description:</div>
                <div class="col-10 col-sm-7 col-xl-6" >
                    <textarea cols="60" rows="8"></textarea>
                </div>
            </div>
            <div class="row wd-course-setting-row ">
                <div class="col-12 col-sm-9 col-xl-8">
                    <button type="button" class="btn wd-btn-red float-end">Update Course Details</button>
                </div>
            </div>
        </>
    )
}

export default CourseDetails;