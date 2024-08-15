import { useEffect } from 'react';

export function useLocalStorage(items) {
    useEffect(() => {
        for (const [key, value] of Object.entries(items)) {
            localStorage.setItem(key, value);
        }
    }, [items]);
};
