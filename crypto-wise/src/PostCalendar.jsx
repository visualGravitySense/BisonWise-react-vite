import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';

const postData = [
  { date: new Date(2024, 10, 5), content: 'Пост 1' }, // 5 ноября
  { date: new Date(2024, 10, 12), content: 'Пост 2' }, // 12 ноября
  { date: new Date(2024, 10, 15), content: 'Пост 3' }, // 15 ноября
  { date: new Date(2024, 10, 20), content: 'Пост 4' }, // 20 ноября
  { date: new Date(2024, 10, 25), content: 'Пост 5' }, // 25 ноября
];

const PostCalendar = () => {
  const [date, setDate] = useState(new Date());
  
  // Функция для проверки, есть ли пост в выбранный день
  const hasPostsOnDate = (date) => {
    return postData.some(post => 
      post.date.getDate() === date.getDate() &&
      post.date.getMonth() === date.getMonth() &&
      post.date.getFullYear() === date.getFullYear()
    );
  };

  // Функция для изменения выбранной даты
  const onChange = newDate => {
    setDate(newDate);
  };

  // Функция для добавления стилизации на дни с постами
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && hasPostsOnDate(date)) {
      return 'has-posts';
    }
    return '';
  };

  return (
    <div className="calendar-container">
      <h2>Календарь с постами</h2>
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={tileClassName}
        locale="ru-RU"
      />
    </div>
  );
};

export default PostCalendar;
