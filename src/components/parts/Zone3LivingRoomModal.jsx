import {ZoneModal} from '../common/ZoneModal.jsx'

export function Zone3LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title="Zone3">
            <p>Coucou Zone 3</p>
        </ZoneModal>
    );
}