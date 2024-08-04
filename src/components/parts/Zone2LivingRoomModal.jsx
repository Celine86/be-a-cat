import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone2LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Quel est le numéro du département Moselle ? </p>
            <ChangeDiv targetNumber={57} secretMessage="La lettre mystère est 'e'" />
        </ZoneModal>
    );
}