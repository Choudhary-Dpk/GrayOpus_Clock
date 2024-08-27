import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    console.log("Start")
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      setTimePassed(prevSeconds => prevSeconds + 1);
    }, 1000);
  
    return () => {
      console.log("end")
      clearInterval(intervalId)};
  }, []);

  return (
    <>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
      <h3>Total Seconds Passed: {timePassed}</h3>
    </>
  );
};

export default App
