import React, { useEffect, useState } from 'react';

const ClockMechanism: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString();
  };

  return (

          <span>UCT : {formatTime(time)}</span>
     
    
  );
};

export default ClockMechanism