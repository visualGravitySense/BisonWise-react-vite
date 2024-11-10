import React from 'react';
import { Card, Elevation, Icon, Intent, Label } from '@blueprintjs/core';
import { FaSmile, FaFrown, FaMeh, FaLaugh } from 'react-icons/fa';  // Примеры иконок
// import './MoodList.css';
import './App.css'

const moods = [
  {
    id: 1,
    moodName: 'Счастлив',
    icon: <FaSmile />,
    gif: 'https://media.giphy.com/media/3oEdv9OjjIjJ67pmy8/giphy.gif',
    time: '10:30 AM',
  },
  {
    id: 2,
    moodName: 'Грустный',
    icon: <FaFrown />,
    gif: 'https://media.giphy.com/media/13ZBw9C14Ez58k/giphy.gif',
    time: '11:00 AM',
  },
  {
    id: 3,
    moodName: 'Умеренно',
    icon: <FaMeh />,
    gif: 'https://media.giphy.com/media/3ohs7KVi7jQd5hrt6M/giphy.gif',
    time: '12:45 PM',
  },
  {
    id: 4,
    moodName: 'Веселый',
    icon: <FaLaugh />,
    gif: 'https://media.giphy.com/media/3oEjHIMXyXzszYeTog/giphy.gif',
    time: '02:30 PM',
  },
  {
    id: 5,
    moodName: 'Вдохновленный',
    icon: <FaSmile />,
    gif: 'https://media.giphy.com/media/d31w5f8yTQpZcQ/giphy.gif',
    time: '03:15 PM',
  },
  {
    id: 6,
    moodName: 'Усталый',
    icon: <FaMeh />,
    gif: 'https://media.giphy.com/media/6fP2tY6bF7sX2/giphy.gif',
    time: '04:00 PM',
  },
  {
    id: 7,
    moodName: 'Мотивированный',
    icon: <FaLaugh />,
    gif: 'https://media.giphy.com/media/3o7abB8gIUSzN5mZ0Q/giphy.gif',
    time: '06:00 PM',
  },
];

const MoodList = () => {
  return (
    <div className="mood-list">
      {moods.map((mood) => (
        <Card key={mood.id} interactive={true} elevation={Elevation.TWO} className="mood-card">
          <div className="mood-header">
            <div className="mood-icon">
              {mood.icon}
            </div>
            <div className="mood-info">
              <Label>{mood.moodName}</Label>
              <div className="mood-time">{mood.time}</div>
            </div>
          </div>
          <div className="mood-gif">
            <img src={mood.gif} alt={mood.moodName} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MoodList;
