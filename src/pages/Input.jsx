import './Input.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Guess } from '../components/common/Guess.jsx';


export function Input() {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown === 0) {
          navigate(-1);
        } else {
          const timer = setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1000);
          return () => clearTimeout(timer);
        }
      }, [countdown, navigate]);

    return (
        <>
            <p className='indication'><span className='countdown'>{countdown}</span></p>
            <p className='indication'>Tape dans l'ordre les <span className='highlight'>8</span> lettres du mot mystère !</p>
            <Guess />
        </>
    )
}
