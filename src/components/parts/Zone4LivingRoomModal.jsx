import {ZoneModal} from '../common/ZoneModal.jsx'

export function Zone4LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title='Zone4'>
            <p>Coucou Zone 4</p>
        </ZoneModal>
    );
}