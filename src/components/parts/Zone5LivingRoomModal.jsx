import {ZoneModal} from '../common/ZoneModal.jsx'

export function Zone5LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title="Zone5">
            <p>Coucou Zone 5</p>
        </ZoneModal>
    );
}