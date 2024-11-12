// src/components/CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseDetail } from '../api/api';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetchCourseDetail(id).then(setCourse);
    }, [id]);

    if (!course) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button>Записаться на курс</button>
        </div>
    );
};

export default CourseDetail;