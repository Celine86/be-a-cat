import { ZoneModal } from '../common/ZoneModal.jsx'
import Indice1 from '/imgs/Indice1.jpeg';

export function Zone4LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Je suis la 3eme lettre du mot désignant l'animal sur l'image ci-dessous</p>
            <img className='imgClue' src={Indice1} />
        </ZoneModal>
    );
}