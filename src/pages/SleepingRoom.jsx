import sleepingroom from '/Patapouf_SleepingRoom.jpeg';
import { NavLink } from 'react-router-dom';
import { Room } from '../components/common/Room.jsx';

export function SleepingRoom() {
  const zones = [
    { id: 'Zone1', coords: '292,202,15' },
    { id: 'Zone2', coords: '68,560,15' },
    { id: 'Zone3', coords: '94,273,15' },
    { id: 'Zone4', coords: '524,87,15' },
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

  const handleZoneClick = (zoneId) => {
    switch (zoneId) {
      case 'Zone1':
        console.log('Action spécifique pour Zone 1');
        break;
      case 'Zone2':
        console.log('Action spécifique pour Zone 2');
        break;
      case 'Zone3':
        console.log('Action spécifique pour Zone 3');
        break;
      case 'Zone4':
        console.log('Action spécifique pour Zone 4');
        break;
      default:
        // Action par défaut
    }
  };

  return (
    <>
      <NavLink className='roomNav' to='/livingroom'>Chercher dans le salon</NavLink>
      <Room 
        zones={zones} 
        hoveredmsg={hoveredmsg}
        clickedmsg={clickedmsg} 
        imageSrc={sleepingroom} 
        mapName='sleepingroom-map'
        onZoneClick={handleZoneClick}
      />
    </>
  );
}
