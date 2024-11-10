import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostFrequencyChart from './PostFrequencyChart';
import ProgressBarWithLabel from './ProgressBarWithLabel';
import MoodList from './MoodList';

function App() {
  const [count, setCount] = useState(0)

  const postData = [
    { day: 'Понедельник', count: 5 },
    { day: 'Вторник', count: 3 },
    { day: 'Среда', count: 4 },
    { day: 'Четверг', count: 6 },
    { day: 'Пятница', count: 7 },
    { day: 'Суббота', count: 2 },
    { day: 'Воскресенье', count: 1 }, ];

  
  const progressData = [
    { label: 'Mood 1', value: 70, maxValue: 100 },
    { label: 'Mood 2', value: 45, maxValue: 100 },
    { label: 'Mood 3', value: 90, maxValue: 100 },
  ];

  return (
    <>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <PostFrequencyChart data={postData} />

      <div className="App" style={{ padding: '20px' }}>
      {progressData.map((data, index) => (
        <ProgressBarWithLabel
          key={index}
          label={data.label}
          value={data.value}
          maxValue={data.maxValue}
        />
      ))}
    </div>

    <MoodList />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
