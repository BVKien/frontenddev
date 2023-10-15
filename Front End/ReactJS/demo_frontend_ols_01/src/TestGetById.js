import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

const TestGetById = () => {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseById = async () => {
            try {
                const response = await axios.get('https://localhost:7054/api/Course/1');
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        fetchCourseById();
    }, []);

    return (
        <div>
            <h1>Course Details</h1>
            {course ? (
                <div>
                    <p>Course ID: {course.courseId}</p>
                    <p>Course Name: {course.name}</p>
                </div>
            ) : (
                <p>Loading course details...</p>
            )}
        </div>
    );
};

export default TestGetById;