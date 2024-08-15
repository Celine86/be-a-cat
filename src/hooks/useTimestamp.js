import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useTimestamp(key) {
  const [timestamp, setTimestamp] = useState(null);

  // Enregistrer le timestamp dans le localStorage
  const saveTimestamp = () => {
    const currentTimestamp = Date.now();
    localStorage.setItem(key, currentTimestamp);
    setTimestamp(currentTimestamp);
  };

  // Récupérer le timestamp au montage
  useEffect(() => {
    const storedTimestamp = localStorage.getItem(key);
    if (storedTimestamp) {
      setTimestamp(parseInt(storedTimestamp, 10));
    }
  }, [key]);

  return [timestamp, saveTimestamp];
}
