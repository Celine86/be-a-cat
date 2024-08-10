import './Room.css';
import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useMouseEnter from '../../hooks/useMouseEnter.js';

export function Room({ zones, hoveredmsg, imageSrc, mapName, onZoneClick }) {

  const location = useLocation();
  const isInLivingRoom = location.pathname === '/livingroom';

  const zoneRefs = zones.reduce((acc, zone) => {
    acc[zone.id] = useRef();
    return acc;
  }, {});

  const hoveredZones = zones.reduce((acc, zone) => {
    acc[zone.id] = useMouseEnter(zoneRefs[zone.id]);
    return acc;
  }, {});

  const handleClick = (zoneId) => {
    if (onZoneClick) {
      onZoneClick(zoneId);
    }
  }

  return (
    <>
      <div className='room'>
        <div className='roomAside'>
          <div className='roomNav'>
            <NavLink className='roomNav--link' to={isInLivingRoom ? '/sleepingroom' : '/livingroom'}>
              {isInLivingRoom ? 'La chambre' : 'Le salon'}
            </NavLink>
            <NavLink className='roomNav--link' to='/clues'>Où cliquer ?</NavLink>
            <NavLink className='roomNav--link' to='/input'>J'ai trouvé !</NavLink>
          </div>
        </div>
        <div className='roomMain'>
          <div className='roomIndications'>
              <p>Appuie partout pour trouver 4 indices afin de reconstituer le mot mystère composé de 8 lettres !</p>
          </div>
          <div className='roomHeader'>
            <div className='onMouseEnter'>
              {zones.map((zone) => (
                hoveredZones[zone.id] && <p className='onMouseEnter__p' key={zone.id}>{hoveredmsg[zone.id]}</p>
              ))}
            </div>
          </div>
          <div className='roomPlayzone'>
            <div className='roomPlayzoneImgFrame'>
              <img className='responsiveImg' src={imageSrc} alt='Clickable' useMap={`#${mapName}`} />
              <map name={mapName}>
                {zones.map((zone) => (
                  <area
                    key={zone.id}
                    ref={zoneRefs[zone.id]}
                    shape='circle'
                    coords={zone.coords}
                    alt={zone.id}
                    onClick={() => handleClick(zone.id)}
                  />
                ))}
              </map>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}