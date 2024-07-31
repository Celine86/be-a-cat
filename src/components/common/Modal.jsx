import './Modal.css';

export function Modal ({children}) {
    return <dialog className="dialog modal" open>
        {children}
    </dialog>
}