import './ZoneModal.css';
import closebtnGreen from '/close-green.png';
import closebtnYellow from '/close-yellow.png';
import { Modal } from './Modal.jsx';
import { createPortal } from 'react-dom';

export function ZoneModal({ isOpen, onClose, title, children }) {
    return (
        <>
        {isOpen && (
            <div>
                {createPortal(
                    <Modal>

                        <div className='closeBtn'>
                            <img src={closebtnGreen}
                                onMouseOver={e => e.currentTarget.src = closebtnYellow}
                                onMouseOut={e => e.currentTarget.src = closebtnGreen}
                                onClick={onClose}
                            />
                        </div>
                        <div className='modalContainer'>
                            <h2 className='modalContainer--title'>{title}</h2>
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