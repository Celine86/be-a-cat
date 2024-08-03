import {ZoneModal} from '../common/ZoneModal.jsx'

export function Zone1LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title="Zone1">
            <p>Coucou Zone 1</p>
        </ZoneModal>
    );
}