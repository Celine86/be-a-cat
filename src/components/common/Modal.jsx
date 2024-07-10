import './Modal.css';

export function Modal ({children}) {
    return <dialog className="dialog homeModal" open>
        {children}
    </dialog>
}