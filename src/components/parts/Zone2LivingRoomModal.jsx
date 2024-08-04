import { ZoneModal } from '../common/ZoneModal.jsx'
import { ChangeDiv } from '../common/ChangeDiv.jsx';

export function Zone2LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title='Zone2'>
            <ChangeDiv targetNumber={12} secretMessage="La lettre mystère est " />
        </ZoneModal>
    );
}