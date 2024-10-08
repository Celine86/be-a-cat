import {ZoneModal} from '../../common/ZoneModal/ZoneModal.jsx';
import Indice2 from '/Indice2.jpeg';

export function Zone1SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Je suis la 2eme lettre du mot désignant le moyen de locomotion sur l'image ci-dessous</p>
            <img className='imgClue' src={Indice2} />
        </ZoneModal>
    );
}
