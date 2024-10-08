import { useState, useEffect } from 'react';

export function useTimestamp(key) {
  const [timestamp, setTimestamp] = useState(null);

  const saveTimestamp = () => {
    const currentTimestamp = Date.now();
    localStorage.setItem(key, currentTimestamp);
    setTimestamp(currentTimestamp);
  };

  useEffect(() => {
    const storedTimestamp = localStorage.getItem(key);
    if (storedTimestamp) {
      setTimestamp(parseInt(storedTimestamp, 10));
    }
  }, [key]);

  return [timestamp, saveTimestamp];
}
