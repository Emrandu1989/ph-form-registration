import { useEffect } from "react";
import Course from "./Courses";
import { useState } from "react";

const Courses = ({handleCourseSelection}) => {
    const [courses, setCourses] = useState([])


    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-3 mr-3">
            {courses.map(course => <Course
            course={course}
            key={course.id}
            handleCourseSelection={handleCourseSelection}
            ></Course> )}
            
        </div>
    );
};

export default Courses;