import {ZoneModal} from '../common/ZoneModal.jsx'
import { DragNDrop } from '../common/DragNDrop.jsx';

export function Zone1LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose} title='Zone1'>
            <DragNDrop 
                className="listA"
            />
        </ZoneModal>
    );
}