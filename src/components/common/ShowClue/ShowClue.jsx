import {useState} from 'react';

export function ShowClue({ secretMessage, defaultMessage, storageKey, storageValue}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        localStorage.setItem(storageKey, storageValue);
    };

    return (
        <div onClick={handleClick}>
            <div
                style={{
                    width: '19.5rem',
                    height: '2rem',
                    backgroundColor: 'var(--primary-bg-color)',
                    border: isClicked ? '0.15rem solid var(--tertiary)' : '0.15rem solid var(--secondary)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                    textAlign: 'center',
                    padding: '0.5rem',
                }}
            >
                {isClicked ? secretMessage : defaultMessage}
            </div>
        </div>
    );
}

