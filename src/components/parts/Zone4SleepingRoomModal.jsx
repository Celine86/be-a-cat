import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone4SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Quel est le numéro du département Bas-Rhin ? </p>
            <ChangeDiv targetNumber={67} secretMessage="La lettre mystère est 'n'" />
        </ZoneModal>
    );
}