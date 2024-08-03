import {ZoneModal} from '../common/ZoneModal.jsx'

export function Zone2LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title='Zone2'>
            <p>Coucou Zone 2</p>
        </ZoneModal>
    );
}