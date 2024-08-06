import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone4SleepingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>On m'obtient en divisant le nombre 134 par 2.
            <br/>Je suis également le numéro du département du Bas-Rhin.</p>
            <ChangeDiv targetNumber={67} secretMessage="La lettre mystère est 'n'" />
        </ZoneModal>
    );
}