import './Guess.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Guess () {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue === 'bretagne') {
            navigate('/bretagne');
        } else {
            navigate('/404');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Quel est le mot mystère ?'
            />
        </form>
    );
};
