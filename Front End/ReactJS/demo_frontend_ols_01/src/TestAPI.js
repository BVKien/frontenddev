/*import React from 'react'
import { useState, useEffect, useContext } from 'react'

const TestAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            const response = await fetch('https://localhost:7054/GetAllCourses');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestAPI
*/

import React, { useState, useEffect } from 'react';

const TestAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            const response = await fetch('https://localhost:7054/GetAllCourses'); // học lại javascript
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <strong>Course ID:</strong> {item.courseId}<br />
                        <strong>Name:</strong> {item.name}<br />
                        <strong>Image:</strong> {item.image}<br />
                        <strong>Course Info:</strong> {item.courseInfo}<br />
                        <strong>Description:</strong> {item.description}<br />
                        <strong>Status:</strong> {item.status}<br />
                        <strong>User ID:</strong> {item.userUserId}<br />
                        <strong>Category ID:</strong> {item.categoryCategoryId}<br />
                        <strong>Fee Status:</strong> {item.feeStatus}<br />
                        <strong>Video Intro:</strong> {item.videoIntro}<br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestAPI;