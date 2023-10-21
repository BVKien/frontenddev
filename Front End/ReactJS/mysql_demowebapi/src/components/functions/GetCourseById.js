import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GetCourseById = () => {
    const [courseId, setCourseId] = useState('')
    const [course, setCourse] = useState(null)

    // id ma nguoi dung nhap vao
    // set courseid = gia tri event ma nguoi dung nhap
    const handleInputChange = (event) => {
        setCourseId(event.target.value)
    }

    const fetchCourseById = async () => {
        try {
            const response = await axios.get(`https://localhost:7041/api/Course/${courseId}`)
            setCourse(response.data)
        } catch (error) {
            console.error('Error fetching ', error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault() // ngăn chặn việc tải lại trang khi nhấn enter 
        fetchCourseById() // gọi hàm để thực hiện get course by id
    }

    return (
        <div>
            <p>GetCourseById</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='courseIdInput'>Enter Course Id: </label>
                <input
                    type='number'
                    id='courseIdInput'
                    value={courseId}
                    onChange={handleInputChange}
                />
                <button type='submit'>fetch course</button>
            </form>
            {course ? (
                <div>
                    <p>course Id: {course.courseId}</p>
                </div>
            ) : (
                <p>Enter valid course Id and click 'fetch course' to see the detalis.</p>
            )}
        </div>
    )
}

export default GetCourseById