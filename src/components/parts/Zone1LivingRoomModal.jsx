import { Modal } from '../common/Modal.jsx';
import { createPortal } from 'react-dom';
import { Guess } from '../common/Guess.jsx';

export function Zone1LivingRoom({isOpen, onClose}) {
    return (
        <>
        {isOpen  && (
        <div>
            {createPortal (
                <Modal>
                    <div className='modalContainer'>
                        <Guess />
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