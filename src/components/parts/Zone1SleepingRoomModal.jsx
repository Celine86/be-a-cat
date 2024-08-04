import { ZoneModal } from '../common/ZoneModal.jsx';
import Indice2 from '/Indice2.jpeg';

export function Zone1SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Je suis la 3eme lettre du mot désignant l'embarcation sur l'image ci-dessous</p>
            <img className='imgClue' src={Indice2} />
        </ZoneModal>
    );
}