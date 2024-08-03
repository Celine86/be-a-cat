import './ZoneModal.css'
import { Modal } from '../common/Modal.jsx';
import { createPortal } from 'react-dom';


export function Zone1LivingRoom({isOpen, onClose}) {
    return (
        <>
        {isOpen  && (
        <div>
            {createPortal (
                <Modal>
                    <div className='closeBtn'><p>X</p></div>
                    <div className='modalContainer'>
                        <h2 className='modalContainer--title'>Zone1</h2>
                        <button className="modalBtn" onClick={onClose}>J'ai compris !</button>
                    </div>
                </Modal>
                , document.getElementById('modal')
            )}
        </div>
        )}
        </>
    )
}