import { Modal } from "../common/Modal.jsx";
import { createPortal } from 'react-dom';

export function Zone2LivingRoom() {
    const [isOpened, swapWindow] = useSwap(true)
    return (
        <>
        {isOpened  && (
        <div>
            {createPortal (
                <Modal>
                    <div className='modalContainer'>
                        <h2 className='modalContainer--title'>Zone2</h2>
                        <button className="modalBtn" onClick={swapWindow}>J'ai compris !</button>
                    </div>
                </Modal>
                , document.getElementById("modal")
            )}
        </div>
        )}
        </>
    )
}