import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;

export const findAllCourses = async () => {
    console.log(`URL: ${COURSES_URL}`)
    const response = await axios.get(COURSES_URL);
    return response.data;
    // setCourses(response.data);
};

export const addCourse = async (course) => {
    const response = await axios.post(COURSES_URL, course);
    return response.data;
    // // add respose to browser side courses
    // setCourses([response.data, ...courses]);
    // //Reset Course
    // setCourse({ name: "" });
};
export const deleteCourse = async (course) => {
    const response = await axios.delete(
        `${COURSES_URL}/${course._id}`
    );
    return response.data;
    // setCourses(courses.filter(
    //     (c) => c._id !== course._id));
};

export const updateCourse = async (course) => {
    const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
    return response.data;
    // setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    // setCourse({ name: "" });
};