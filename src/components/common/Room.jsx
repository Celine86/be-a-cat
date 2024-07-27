import { useRef } from 'react';
import useMouseEnter from '../../hooks/useMouseEnter.js';
import useClickedArea from '../../hooks/useClickedArea.js';
import './Room.css';

export function Room({ zones, messages, imageSrc, mapName }) {
  const [clickedArea, handleClick, resetClickedArea] = useClickedArea();

  const zoneRefs = zones.reduce((acc, zone) => {
    acc[zone.id] = useRef();
    return acc;
  }, {});

  const hoveredZones = zones.reduce((acc, zone) => {
    acc[zone.id] = useMouseEnter(zoneRefs[zone.id]);
    return acc;
  }, {});

  return (
    <>
      <div className='chapeau'>
        <div className='onMouseEnter'>
          {zones.map((zone) => (
            hoveredZones[zone.id] && <p className='onMouseEnter__p' key={zone.id}>{messages[zone.id]}</p>
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
              onClick={() => handleClick(zone.id)}
            />
          ))}
        </map>
      </div>
      <div className='info'>
        {clickedArea &&
          <div className='clicked'>
            <p>Vous avez cliqué sur {clickedArea}</p>
            <button className="roomBtn" onClick={resetClickedArea}>Je rejoue !</button>
          </div>
        }
      </div>
    </>
  );
}
