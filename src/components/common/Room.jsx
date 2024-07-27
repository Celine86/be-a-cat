import './Room.css';
import {useState, useRef } from 'react';
import useMouseEnter from '../../hooks/useMouseEnter.js';
import useClickedArea from '../../hooks/useClickedArea.js';

export function Room({ zones, hoveredmsg, clickedmsg, imageSrc, mapName, onZoneClick }) {
  const [clickedArea, handleClick, resetClickedArea] = useClickedArea();
  const [clickedMessage, setClickedMessage] = useState('');

  const zoneRefs = zones.reduce((acc, zone) => {
    acc[zone.id] = useRef();
    return acc;
  }, {});

  const hoveredZones = zones.reduce((acc, zone) => {
    acc[zone.id] = useMouseEnter(zoneRefs[zone.id]);
    return acc;
  }, {});

  const handleAreaClick = (zoneId) => {
    handleClick(zoneId);
    setClickedMessage(clickedmsg[zoneId] || 'Zone non reconnue');
    if (onZoneClick) {
      onZoneClick(zoneId);
    }
  };

  return (
    <>
      <div className='chapeau'>
        <div className='onMouseEnter'>
          {zones.map((zone) => (
            hoveredZones[zone.id] && <p className='onMouseEnter__p' key={zone.id}>{hoveredmsg[zone.id]}</p>
          ))}
        </div>
      </div>
      <div className="room">
        <img src={imageSrc} alt="Clickable" useMap={`#${mapName}`} />
        <map name={mapName}>
          {zones.map((zone) => (
            <area
              key={zone.id}
              ref={zoneRefs[zone.id]}
              shape="circle"
              coords={zone.coords}
              alt={zone.id}
              onClick={() => handleAreaClick(zone.id)}
            />
          ))}
        </map>
      </div>
      <div className='info'>
        {clickedArea &&
          <div className='clicked'>
            <p>{clickedMessage}</p>
            <button className="roomBtn" onClick={resetClickedArea}>Je rejoue !</button>
          </div>
        }
      </div>
    </>
  );
}