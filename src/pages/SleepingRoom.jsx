import './SleepingRoom.css';
import sleepingroom from '/Patapouf_SleepingRoom.jpeg';
import { useState } from 'react';

export function SleepingRoom () {

  const [clickedArea, setClickedArea] = useState(null);

  const handleClick = (area) => {
      setClickedArea(area);
      console.log(`You clicked on ${area}`);
  };

  return (
    <>
    <div className="sleepingroom"> 
      <img src={sleepingroom} alt="Clickable" useMap="#image-map" />
      <map name="image-map">
        <area shape="circle" coords="292,202,15" alt="Zone1" onClick={() => handleClick('Zone1')} />
        <area shape="circle" coords="353,294,15" alt="Zone2" onClick={() => handleClick('Zone2')} />
        <area shape="circle" coords="94,273,15" alt="Zone3" onClick={() => handleClick('Zone3')} />
        <area shape="circle" coords="530,380,15" alt="Zone4" onClick={() => handleClick('Zone4')} />
        <area shape="circle" coords="340,405,15" alt="Zone5" onClick={() => handleClick('Zone5')} />
      </map>
    </div>
    <div className='info'>{clickedArea && <p>Vous avez cliqué sur {clickedArea}</p>}</div>
    </>

  );
};