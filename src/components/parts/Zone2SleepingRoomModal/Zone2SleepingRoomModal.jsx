import {ZoneModal} from '../../common/ZoneModal/ZoneModal.jsx'
import {ChangeDiv} from '../../common/ChangeDiv/ChangeDiv.jsx';

export function Zone2SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>On m'obtient si l'on additionne le nombre 8 au nombre 14. <br />
            Je suis également le numéro du département des Côtes d'Armor.</p>
            <ChangeDiv targetNumber={22} secretMessage="La lettre mystère est 'g'" />
        </ZoneModal>
    );
}
