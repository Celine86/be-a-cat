import {useState} from 'react';

export function useSwap (initial = false) {
    const [state, setState] = useState(initial)
    const swap = () => setState(v => !v)
    return [state, swap]
}