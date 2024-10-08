import {ZoneModal} from '../../common/ZoneModal/ZoneModal.jsx'
import {DragNDrop} from '../../common/DragNDrop/DragNDrop.jsx';

export function Zone3SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Déplace les planches de gauche à droite pour découvrir une lettre !</p>
            <DragNDrop 
                className="indice5"
            />
        </ZoneModal>
    );
}
