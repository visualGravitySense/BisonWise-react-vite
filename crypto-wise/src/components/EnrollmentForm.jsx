// src/components/EnrollmentForm.jsx
import React from 'react';

const EnrollmentForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Логика записи на курс
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Записаться на курс</h3>
            <input type="text" placeholder="Ваше имя" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default EnrollmentForm;