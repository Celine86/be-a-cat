import { Room } from '../components/common/Room.jsx';
import sleepingroom from '/Patapouf_SleepingRoom.jpeg';

export function SleepingRoom() {
  const zones = [
    { id: 'Zone1', coords: '292,202,15' },
    { id: 'Zone2', coords: '353,294,15' },
    { id: 'Zone3', coords: '94,273,15' },
    { id: 'Zone4', coords: '524,87,15' },
    { id: 'Zone5', coords: '340,405,15' },
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
      imageSrc={sleepingroom} 
      mapName="sleepingroom-map" 
    />
  );
}