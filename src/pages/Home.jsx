import './Home.css';
import SleepingRoom from "/Patapouf_SleepingRoom.jpeg";
import LivingRoom from "/Patapouf_LivingRoom.jpeg";
import { HomeModal } from "../components/parts/HomeModal.jsx";
import { NavLink } from 'react-router-dom';

export function Home() {

    return (
        <>
        <HomeModal />
        <div>
            <h2>Où chercher en premier ?</h2>
        </div>
        <div>
            <nav>
                <NavLink className="navlink" to="/sleepingroom"><img className="imgMini" src={SleepingRoom}/></NavLink>
                <NavLink className="navlink" to="/livingroom"><img className="imgMini" src={LivingRoom}/></NavLink>
            </nav>
        </div>
        </>
    )
}