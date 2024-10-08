import { useState } from 'react';

export default function useClickedArea () {

  const [clickedArea, setClickedArea] = useState(null);
  
  const handleClick = (area) => {
    setClickedArea(area);
  };
  const resetClickedArea = () => {
    setClickedArea(null);
  };

  return [clickedArea, handleClick, resetClickedArea];
};
