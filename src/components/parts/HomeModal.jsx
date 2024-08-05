import './HomeModal.css';
import patapouf from '/Patapouf_Modal.jpeg';
import { Modal } from '../common/Modal.jsx';
import { createPortal } from 'react-dom';
import { useSwap } from '../../hooks/useSwap.js';

export function HomeModal() {
    const [isOpened, swapWindow] = useSwap(true)
    return (
        <>
        {isOpened  && (
        <div>
            {createPortal (
                <Modal>
                    <div className='modalContainer'>
                        <h2 className='modalContainer--title'>Patapouf est malheureux...</h2>
                        <div className='modalContainer__subContainer'>
                            <div className='presentation'>
                                <img className='presentation__patapouf' src={patapouf} />
                                <div className='presentation__texte'>
                                    <p className='presentation__texte--center'> 
                                        Patapouf est un chat curieux et maladroit, un peu comme tous les chats.<br/> 
                                        A force de toucher à tout il a perdu sa baballe rouge et il est très malheureux.<br/>
                                        Aide Patapouf a retrouver sa magnifique baballe !<br/>
                                        Des indices se cachent dans le salon et la chambre.<br />
                                        Passe ta souris partout et note les indices qui te permettront de trouver les <span className='highlight'>8</span> lettres du mot mystère !
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className='modalBtn' onClick={swapWindow}>J'ai compris !</button>
                    </div>
                </Modal>
                , document.getElementById('root')
            )}
        </div>
        )}
        </>
    )
}