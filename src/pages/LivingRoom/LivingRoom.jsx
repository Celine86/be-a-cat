import livingroom from '/Patapouf_LivingRoom.jpeg';
import { useSwap } from '../../hooks/useSwap.js';
import { Room } from '../../components/common/Room.jsx';
import { Zone1LivingRoom } from '../../components/parts/Zone1LivingRoomModal.jsx';
import { Zone2LivingRoom } from '../../components/parts/Zone2LivingRoomModal.jsx';
import { Zone3LivingRoom } from '../../components/parts/Zone3LivingRoomModal.jsx';
import { Zone4LivingRoom } from '../../components/parts/Zone4LivingRoomModal.jsx';

export function LivingRoom() {
  const zones = [
    { id: 'Zone1', coords: '448,152,25' },
    { id: 'Zone2', coords: '325,483,25' },
    { id: 'Zone3', coords: '15,149,25' },
    { id: 'Zone4', coords: '240,122,25' },
  ];

  const hoveredmsg = {
    Zone1: 'Cette affiche aurait-elle une signification ?',
    Zone2: 'Une télécommande pleine de touches !',
    Zone3: 'Un QRCode ! Que peut-il bien cacher ?',
    Zone4: 'Le portrait de Teigne !',
  };

  const clickedmsg = {
    Zone1: 'As-tu trouvé le mot mystère ?',
    Zone2: 'Prêt à rendre Patapouf heureux ?',
    Zone3: 'Peut-être un indice sur le super site indiqué par le QRCode ?',
    Zone4: 'Patapouf va-t-il trouver sa baballe ?',
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
      <Room 
        zones={zones} 
        hoveredmsg={hoveredmsg}
        clickedmsg={clickedmsg} 
        imageSrc={livingroom} 
        mapName='livingroom-map'
        onZoneClick={handleZoneClick}
      />
      {isZone1Open && <Zone1LivingRoom isOpen={isZone1Open} onClose={toggleZone1} />}
      {isZone2Open && <Zone2LivingRoom isOpen={isZone2Open} onClose={toggleZone2} />}
      {isZone3Open && <Zone3LivingRoom isOpen={isZone3Open} onClose={toggleZone3} />}
      {isZone4Open && <Zone4LivingRoom isOpen={isZone4Open} onClose={toggleZone4} />}
    </>
  );
}