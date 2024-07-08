import './Modal.css';

export function Modal ({children}) {
    return <dialog className="dialog" open>
        {children}
    </dialog>
}