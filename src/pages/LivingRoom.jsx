import livingroom from '/Patapouf_LivingRoom.jpeg';
import { useSwap } from '../hooks/useSwap.js';
import { Room } from '../components/common/Room.jsx';
import { Zone1LivingRoom } from '../components/parts/Zone1LivingRoomModal.jsx';
import { Zone2LivingRoom } from '../components/parts/Zone2LivingRoomModal.jsx';
import { Zone3LivingRoom } from '../components/parts/Zone3LivingRoomModal.jsx';
import { Zone4LivingRoom } from '../components/parts/Zone4LivingRoomModal.jsx';
import { Zone5LivingRoom } from '../components/parts/Zone5LivingRoomModal.jsx';

export function LivingRoom() {
  const zones = [
    { id: 'Zone1', coords: '535,190,15' },
    { id: 'Zone2', coords: '400,579,15' },
    { id: 'Zone3', coords: '30,195,15' },
    { id: 'Zone4', coords: '286,157,15' },
    { id: 'Zone5', coords: '118,597,15' },
  ];

  const hoveredmsg = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Un QRCode ! Que peut-il bien cacher ?",
    Zone4: "zone4",
    Zone5: "Message spécifique pour Zone 5",
  };

  const clickedmsg = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Pas d'indice en particulier, juste un site à visiter :)",
    Zone4: "zone4",
    Zone5: "Message spécifique pour Zone 5",
  };

  const [isZone1Open, toggleZone1] = useSwap(false);
  const [isZone2Open, toggleZone2] = useSwap(false);
  const [isZone3Open, toggleZone3] = useSwap(false);
  const [isZone4Open, toggleZone4] = useSwap(false);
  const [isZone5Open, toggleZone5] = useSwap(false);

  const handleZoneClick = (zoneId) => {
    switch (zoneId) {
      case 'Zone1':
        console.log("Action spécifique pour Zone 1");
        toggleZone1();
        break;
      case 'Zone2':
        console.log("Action spécifique pour Zone 2");
        toggleZone2();
        break;
      case 'Zone3':
        console.log("Action spécifique pour Zone 3");
        //toggleZone3();
        break;
      case 'Zone4':
        console.log("Action spécifique pour Zone 4");
        toggleZone4();
        break;
      case 'Zone5':
        console.log("Action spécifique pour Zone 5");
        toggleZone5();
        break;
      default:
        console.log("Zone non reconnue");
        // Action par défaut
    }
  };

  return (
    <>
      <Room 
        zones={zones} 
        hoveredmsg={hoveredmsg}
        clickedmsg={clickedmsg} 
        imageSrc={livingroom} 
        mapName="livingroom-map"
        onZoneClick={handleZoneClick}
      />
      {isZone1Open && <Zone1LivingRoom isOpen={isZone1Open} onClose={toggleZone1} />}
      {isZone2Open && <Zone2LivingRoom isOpen={isZone2Open} onClose={toggleZone2} />}
      {isZone3Open && <Zone3LivingRoom isOpen={isZone3Open} onClose={toggleZone3} />}
      {isZone4Open && <Zone4LivingRoom isOpen={isZone4Open} onClose={toggleZone4} />}
      {isZone5Open && <Zone5LivingRoom isOpen={isZone5Open} onClose={toggleZone5} />}
    </>
  );
}