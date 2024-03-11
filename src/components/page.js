import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Countdown from 'react-countdown'; // Import the Countdown component
import logo from './logo.png'; // Import your logo image file
import cookieImage from './cookie.png'; // Import your cookie image file

import '../App.css';
import './page.css';

function Page() {
  // State to store the end time for the countdown
  const [endTime, setEndTime] = useState(null);
  // State to store the countdown progress
  const [countdownProgress, setCountdownProgress] = useState(0);

  useEffect(() => {
    // Calculate the end time for the countdown (current time + 5 minutes)
    const currentTime = new Date().getTime();
    const newEndTime = currentTime + 5 * 60 * 1000; // 5 minutes in milliseconds
    setEndTime(newEndTime);

    // Calculate the interval for updating the countdown progress
    const interval = setInterval(() => {
      const elapsedTime = new Date().getTime() - currentTime;
      const progress = elapsedTime / (5 * 60 * 1000); // Calculate progress as a fraction of total duration
      setCountdownProgress(progress);
    }, 1000); // Update every second

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Custom renderer for the countdown
  const countdownRenderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render completed state if countdown has finished
      return <span>Time's up!</span>;
    } else {
      // Render minutes and seconds with leading zeros
      return (
        <span>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      );
    }
  };

  // Get today's date and format it as MM.DD.YYYY
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  // Get the current time and format it as "2:50 PM"
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div>
      <div className='back-button'>
        <FontAwesomeIcon icon={faAngleLeft} className="back-icon" />
        <div className='intro'></div>
      </div>
      <div className='hero-container'>
        <div className="image-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Use the imported logo image */}
        </div>
        <div className='flash'>
          <p>Flash this screen in front of our bakers eyes when you arrive to pick up your free cookie</p>
          <div className="cookie-container">
            <img src={cookieImage} alt="Cookie" className="cookie-image" />
          </div>
          <div className='countdown-container'>
            {endTime && <Countdown date={endTime} renderer={countdownRenderer} />} {/* Countdown for 5 minutes */}
            <span className="remaining-text">REMAINING</span> {/* Text "remaining" */}
          </div>
        </div>
        <div className='free'>
          <p>free cookie valid until:</p>
          <br/>
          <p className="date">{today.split('/').join('.')}</p> {/* Today's date */}
          <br/>
          <p className="time">{currentTime}</p> {/* Current time */}
        </div>
      </div>
    </div>
  );
}

export default Page;
