import { useState, useEffect } from 'react';

export function useDeviceType () {
  const getDeviceType = () => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      return 'mobileOrTablet';
    } else {
      return 'desktop';
    }
  };

  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};
