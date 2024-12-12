import React, { useEffect, useState } from 'react';
import Loading from './loading';
// Function to simulate delay (waiting)
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Rape = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
   
      setLoaded(true);    // Change state to trigger re-render
    };

    loadContent();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className='bg-white mt-5 text-black text-2xl'>
      {loaded ? 'RapeSCOOO' : <Loading/>}
    </div>
  );
};

export default Rape;
