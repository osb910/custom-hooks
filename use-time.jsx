import {useState, useEffect} from 'react';
const useTime = ({showTime = true}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!showTime) return;
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [showTime]);

  return time;
};

export default useTime;
