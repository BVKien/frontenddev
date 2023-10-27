import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCourse = () => {
    const [course, setCourse] = useState({
        courseId: 0,
        courseName: '',
        description: '',
        courseInfo: '',
        image: '',
        videoIntro: '',
        fee: '',
        status: '',
        categoryCategoryId: '',
        userUserId: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourse({
            ...course,
            [name]: value
        })
    }



    return (
        <div>AddCourse</div>
    )
}

export default AddCourse