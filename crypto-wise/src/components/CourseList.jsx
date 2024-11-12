// src/components/CourseList.jsx
import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api/api';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Получение данных о курсах из API
        fetchCourses().then(setCourses);
    }, []);

    return (
        <div>
            <h1>Каталог курсов</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button>Подробнее</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;