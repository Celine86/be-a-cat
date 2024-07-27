import { Room } from '../components/common/Room.jsx';
import livingroom from '/Patapouf_LivingRoom.jpeg';

export function LivingRoom() {
  const zones = [
    { id: 'Zone1', coords: '535,190,15' },
    { id: 'Zone2', coords: '400,579,15' },
    { id: 'Zone3', coords: '30,195,15' },
    { id: 'Zone4', coords: '286,157,15' },
    { id: 'Zone5', coords: '118,597,15' },
  ];

  const messages = {
    Zone1: "Message spécifique pour Zone 1",
    Zone2: "Message spécifique pour Zone 2",
    Zone3: "Message spécifique pour Zone 3",
    Zone4: "Message spécifique pour Zone 4",
    Zone5: "Message spécifique pour Zone 5",
  };

  return (
    <Room 
      zones={zones} 
      messages={messages} 
      imageSrc={livingroom} 
      mapName="livingroom-map" 
    />
  );
}