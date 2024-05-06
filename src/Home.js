import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  const [swingDirection, setSwingDirection] = useState('right');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSwingDirection(prevDirection => prevDirection === 'left' ? 'right' : 'left');}, 2000); 

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="landing-container">
    <div>
      <img
        src="https://i.postimg.cc/Hnr1STCJ/kisspng-candy-crush-saga-candy-crush-soda-saga-bubble-witc-candy-crush-5abf518f050756-30835780152248.png"
        alt=""
        className={`logo swing-${swingDirection}`}/>
    </div>
   <Link to={'/Game'}>
      <div>
        <button type='button' className='play'>
           Play
        </button>
      </div>
   </Link>
</div>
);
}

export default Home
