import { useState } from 'react';

export default function useClickedArea () {
  const [clickedArea, setClickedArea] = useState(null);

  const handleClick = (area) => {
    setClickedArea(area);
    console.log(`You clicked on ${area}`);
  };

  return [clickedArea, handleClick];
};
