// src/components/CourseItem.jsx
import React from "react";

const CourseItem = ({ title }) => {
    return (
        <button className="course-item">
            {title}
        </button>
    );
};

export default CourseItem;
