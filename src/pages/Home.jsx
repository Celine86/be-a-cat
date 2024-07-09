import './Home.css';
import patapouf from '../assets/imgs/Patapouf_Modal.jpeg';
import { useSwap } from '../hooks/useSwap';
import { useDeviceType } from '../hooks/useDeviceType.js';
import { createPortal } from 'react-dom';
import { Modal } from "../components/Modal.jsx";


export function Home() {

    const [isOpened, swapWindow] = useSwap(true)
    const deviceType = useDeviceType();

    return (
        <>
        <div id="test" className='home'>
            {createPortal (
                <Modal>
                    {deviceType === 'mobileOrTablet' && (
                        <div className='modalContainer'>
                            <p className='notCompatible'>Pas compatible</p>
                        </div>
                    )}                    
                    {deviceType === 'desktop' && (
                        <div className='modalContainer'>
                            <h2 className='modalContainer--title'>Patapouf est malheureux...</h2>
                            <div className="modalContainer__subContainer">
                                <div className="presentation">
                                    <img className="presentation__patapouf" src={patapouf} />
                                    <div className="presentation__texte">
                                        <p className="presentation__texte--center"> 
                                            Patapouf est un chat curieux et maladroit, un peu comme tous les chats.<br/> 
                                            A force de toucher à tout il a perdu sa baballe rouge et il est très malheureux.<br/>
                                            Aide Patapouf a retrouver sa magnifique baballe !<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={swapWindow}>J'ai compris !</button>
                        </div>
                    )}
                </Modal>, document.getElementById("root")
            )}
        </div>
        </>
    )
}