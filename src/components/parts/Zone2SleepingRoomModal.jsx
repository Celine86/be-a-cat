import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone2SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Quel est le numéro du département Côtes d'Armor ? </p>
            <ChangeDiv targetNumber={22} secretMessage="La lettre mystère est 'g'" />
        </ZoneModal>
    );
}