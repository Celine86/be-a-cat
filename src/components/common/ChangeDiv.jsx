import './ChangeDiv.css';
import { useState } from 'react';

export function ChangeDiv ({ targetNumber, secretMessage }) {
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
  
    const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      if (parseInt(value, 10) === targetNumber) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    };
  
    return (
      <div className='changeDivBlock'>
          <input type='number' value={inputValue} onChange={handleChange} />
        <div
          style={{
            width: '20rem',
            height: '2rem',
            backgroundColor: 'var(--primary-bg-color)',
            border: isCorrect ? '0.25rem solid var(--tertiary)' : '0.25rem solid var(--secondary)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1rem',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          {isCorrect ? secretMessage : `Trouve le bon nombre pour révéler la lettre mystère !`}
        </div>
      </div>
    );


}