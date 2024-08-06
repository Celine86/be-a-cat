import sleepingroom from '/Patapouf_SleepingRoom.jpeg';
import { NavLink } from 'react-router-dom';
import { useSwap } from '../../hooks/useSwap.js';
import { Room } from '../../components/common/Room.jsx';
import { Zone1SleepingRoom } from '../../components/parts/Zone1SleepingRoomModal.jsx';
import { Zone2SleepingRoom } from '../../components/parts/Zone2SleepingRoomModal.jsx';
import { Zone3SleepingRoom } from '../../components/parts/Zone3SleepingRoomModal.jsx';
import { Zone4SleepingRoom } from '../../components/parts/Zone4SleepingRoomModal.jsx';

export function SleepingRoom() {
  const zones = [
    { id: 'Zone1', coords: '243,168,25' },
    { id: 'Zone2', coords: '44,461,25' },
    { id: 'Zone3', coords: '79,231,25' },
    { id: 'Zone4', coords: '426,67,25' },
  ];

  const hoveredmsg = {
    Zone1: 'Que peut cacher cette affiche ? Quel est son message ?',
    Zone2: 'En route pour trouver la baballe !',
    Zone3: 'Une lampe ! Va-t-elle nous éclairer ?',
    Zone4: 'un QRCode ! Que peut-il bien cacher ?',
  };

  const clickedmsg = {
    Zone1: 'Quel est le mot mystère ?',
    Zone2: 'Patapouf va-t-il être heureux bientôt ?',
    Zone3: 'Où est la baballe ?',
    Zone4: 'Peut-être un indice sur le super site indiqué par le QRCode ?',
  };

  const [isZone1Open, toggleZone1] = useSwap(false);
  const [isZone2Open, toggleZone2] = useSwap(false);
  const [isZone3Open, toggleZone3] = useSwap(false);
  const [isZone4Open, toggleZone4] = useSwap(false);

  const handleZoneClick = (zoneId) => {
    switch (zoneId) {
      case 'Zone1':
        toggleZone1();
        break;
      case 'Zone2':
        toggleZone2();
        break;
      case 'Zone3':
        toggleZone3();
        break;
      case 'Zone4':
        toggleZone4();
        break;
      default:
        // Action par défaut
    }
  };

  return (
    <>
      <div className='roomNav'>
        <NavLink className='roomNav--link' to='/livingroom'>Chercher dans le salon</NavLink>
        <NavLink className='roomNav--link' to='/input'>J'ai trouvé !</NavLink>
      </div>
      <div className='roomIndications'>
        <p>Passe ta souris partout pour trouver 4 indices afin de reconstituer le mot mystère composé de 8 lettres !</p>
      </div>
      <Room 
        zones={zones} 
        hoveredmsg={hoveredmsg}
        clickedmsg={clickedmsg} 
        imageSrc={sleepingroom} 
        mapName='sleepingroom-map'
        onZoneClick={handleZoneClick}
      />
      {isZone1Open && <Zone1SleepingRoom isOpen={isZone1Open} onClose={toggleZone1} />}
      {isZone2Open && <Zone2SleepingRoom isOpen={isZone2Open} onClose={toggleZone2} />}
      {isZone3Open && <Zone3SleepingRoom isOpen={isZone3Open} onClose={toggleZone3} />}
      {isZone4Open && <Zone4SleepingRoom isOpen={isZone4Open} onClose={toggleZone4} />}
    </>
  );
}
