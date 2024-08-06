import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone2LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>On m'obtient en additionnant 3 fois le nombre 19.
            <br/>Je suis également le numéro du département de la Moselle.</p>
            <ChangeDiv targetNumber={57} secretMessage="La lettre mystère est 'e'" />
        </ZoneModal>
    );
}