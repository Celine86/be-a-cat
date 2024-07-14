import './Home.css';
import { HomeModal } from "../components/parts/HomeModal.jsx";

export function Home() {

    return (
        <>
        <HomeModal />
        <div className="sleepingroom">
            <img src="/Patapouf_Room.jpeg" />
        </div>
        </>
    )
}