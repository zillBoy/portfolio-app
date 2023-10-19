// React Dependencies
import { useState, useEffect } from 'react'

const useTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  return currentTime;
}

export default useTime