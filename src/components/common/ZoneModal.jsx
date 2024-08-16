import './ZoneModal.css';
import closebtnGreen from '/imgs/close-green.png';
import closebtnYellow from '/imgs/close-yellow.png';
import { Modal } from './Modal.jsx';
import { createPortal } from 'react-dom';

export function ZoneModal({ isOpen, onClose, children }) {
    return (
        <>
        {isOpen && (
            <div>
                {createPortal(
                    <Modal>
                        <div className='closeDiv'>
                            <img className='closeDivBtn' src={closebtnGreen}
                                onMouseOver={e => e.currentTarget.src = closebtnYellow}
                                onMouseOut={e => e.currentTarget.src = closebtnGreen}
                                onClick={onClose}
                            />
                        </div>
                        <div className='modalContainer'>
                            {children}
                        </div>

                    </Modal>
                    ,document.getElementById('modal')
                )}
            </div>
        )}
        </>
    );
}