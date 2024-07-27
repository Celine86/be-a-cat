import sleepingroom from '/Patapouf_SleepingRoom.jpeg';
import { Room } from '../components/common/Room.jsx';

export function SleepingRoom() {
  const zones = [
    { id: 'Zone1', coords: '292,202,15' },
    { id: 'Zone2', coords: '353,294,15' },
    { id: 'Zone3', coords: '94,273,15' },
    { id: 'Zone4', coords: '524,87,15' },
    { id: 'Zone5', coords: '340,405,15' },
  ];

  const hoveredmsg = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Message spécifique pour Zone 3",
    Zone4: "un QRCode ! Que peut-il bien cacher ?",
    Zone5: "Message spécifique pour Zone 5",
  };

  const clickedmsg = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Message spécifique pour Zone 3",
    Zone4: "Test",
    Zone5: "Message spécifique pour Zone 5",
  };

  const handleZoneClick = (zoneId) => {
    switch (zoneId) {
      case 'Zone1':
        console.log("Action spécifique pour Zone 1");
        // Ajoutez l'action spécifique pour Zone 1 ici
        break;
      case 'Zone2':
        console.log("Action spécifique pour Zone 2");
        // Ajoutez l'action spécifique pour Zone 2 ici
        break;
      case 'Zone3':
        console.log("Action spécifique pour Zone 3");
        // Ajoutez l'action spécifique pour Zone 3 ici
        break;
      case 'Zone4':
        console.log("Action spécifique pour Zone 4");
        // Ajoutez l'action spécifique pour Zone 4 ici
        break;
      case 'Zone5':
        console.log("Action spécifique pour Zone 5");
        // Ajoutez l'action spécifique pour Zone 5 ici
        break;
      default:
        console.log("Zone non reconnue");
        // Action par défaut
    }
  };

  return (
    <Room 
      zones={zones} 
      hoveredmsg={hoveredmsg}
      clickedmsg={clickedmsg} 
      imageSrc={sleepingroom} 
      mapName="sleepingroom-map"
      onZoneClick={handleZoneClick}
    />
  );
}
