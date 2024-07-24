import React, { useRef } from 'react';
import livingroom from '/Patapouf_LivingRoom.jpeg';
import useClickedArea from '../hooks/useClickedArea.js'; 
import useMouseEnter from '../hooks/useMouseEnter.js';

export function LivingRoom () {

  const [clickedArea, handleClick, resetClickedArea] = useClickedArea();

  const zoneRefs = {
    Zone1: useRef(),
    Zone2: useRef(),
    Zone3: useRef(),
    Zone4: useRef(),
    Zone5: useRef(),
  };

  const hoveredZones = {
    Zone1: useMouseEnter(zoneRefs.Zone1),
    Zone2: useMouseEnter(zoneRefs.Zone2),
    Zone3: useMouseEnter(zoneRefs.Zone3),
    Zone4: useMouseEnter(zoneRefs.Zone4),
    Zone5: useMouseEnter(zoneRefs.Zone5),
  };

  const messages = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Message spécifique pour Zone 3",
    Zone4: "Message spécifique pour Zone 4",
    Zone5: "Message spécifique pour Zone 5",
  };

  return (
    <>
    <div className='chapeau'>
        <h2>Le Salon !</h2>
        <h3>Territoire de Teigne, le chat coloc de Patapouf !</h3>
    </div>    
    <div className="room">
        <img src={livingroom} alt="Clickable" useMap="#image-map" />
        <map name="image-map">
            <area ref={zoneRefs.Zone1} shape="circle" coords="535,190,15" alt="Zone1" onClick={() => handleClick('Zone1')} />
            <area ref={zoneRefs.Zone2} shape="circle" coords="400,579,15" alt="Zone2" onClick={() => handleClick('Zone2')} />
            <area ref={zoneRefs.Zone3} shape="circle" coords="30,195,15" alt="Zone3" onClick={() => handleClick('Zone3')} />
            <area ref={zoneRefs.Zone4} shape="circle" coords="286,157,15" alt="Zone4" onClick={() => handleClick('Zone4')} />
            <area ref={zoneRefs.Zone5} shape="circle" coords="118,597,15" alt="Zone5" onClick={() => handleClick('Zone5')} />
        </map>
    </div>
    <div className='info'>
        <div className='onMouseEnter'>
            {Object.keys(hoveredZones).map((zone) => (
            hoveredZones[zone] && <p className='onMouseEnter__p' key={zone}>{messages[zone]}</p>
            ))}
        </div>
        {clickedArea && 
        <div className='clicked'>
            <p>Vous avez cliqué sur {clickedArea}</p>
            <button className="roomBtn" onClick={resetClickedArea}>Je rejoue !</button>
        </div>
        }
    </div>
    </>

  );
};