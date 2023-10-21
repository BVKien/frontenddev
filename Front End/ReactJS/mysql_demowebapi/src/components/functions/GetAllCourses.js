import React from 'react';
import { useState, useEffect } from 'react';

const GetAllCourses = () => {
    // khoi tao constuctor
    // getter, setter - data, setDate = useState
    const [data, setData] = useState([])

    // useEffect(() => {}, [])
    useEffect(() => {
        fetchDataFromApi()
    }, [])

    const fetchDataFromApi = async () => {
        try {
            // khoi tao 1 response 
            const response = await fetch('https://localhost:7041/api/Course')
            // check response de bao loi
            if (!response.ok) {
                throw new Error('network is not ok')
            }
            // khoi tao 1 responseData muc dich la de chuyen tu data thanh json
            const responseData = await response.json()
            // seetData
            setData(responseData)
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    return (
        <div>
            GetAllCourses
            <ul>
                {data.map(item => (
                    <li key={item.courseId}>
                        <p>Course Id: {item.courseId}</p>
                        <p>courseName: {item.courseName}</p>
                        <p>description: {item.description}</p>
                        <p>courseInfo: {item.courseInfo}</p>
                        <p>image: {item.image}</p>
                        <p>videoIntro: {item.videoIntro}</p>
                        <p>fee: {item.fee}</p>
                        <p>status: {item.status}</p>
                        <p>categoryCategoryId: {item.categoryCategoryId}</p>
                        <p>userUserId: {item.userUserId}</p>
                        <p>courseId: {item.courseId}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetAllCourses