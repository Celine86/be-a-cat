import './SleepingRoom.css';
import sleepingroom from '/Patapouf_SleepingRoom.jpeg';
import useClickedArea from '../hooks/useClickedArea.js'; 

export function SleepingRoom () {

  const [clickedArea, handleClick] = useClickedArea();

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