import { useRef } from 'react';
import useMouseEnter from '../../hooks/useMouseEnter.js';

export function Tooltip ({ imageSrc, alt, tooltip, imageClass }) {
  const ref = useRef(null);
  const isHovered = useMouseEnter(ref);

  return (
    <div 
      className="tooltipBlock" 
      style={{ 
        position: 'relative', 
        display: 'inline-block' 
      }}
      ref={ref}
    >
      <img src={imageSrc} alt={alt} className={imageClass} />
      {isHovered && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '0,15rem',
          padding: '0,15rem',
          backgroundColor: 'var(--primary-bg-color)',
          color: 'var(--primary)',
          zIndex: 10,
          whiteSpace: 'nowrap'
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
};
