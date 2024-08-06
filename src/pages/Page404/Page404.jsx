import Img404 from '/404.jpeg';
import './Page404.css';
import { Header } from '../../components/layout/Header.jsx';
import { Footer } from '../../components/layout/Footer.jsx';
import { NavLink } from 'react-router-dom';

export function Page404() {
    return (
        <>
            <Header />
            <main>
                <img className='img404' src={Img404} />
                <NavLink to='/'><button className='btn404'>Retour au jeu</button></NavLink>
            </main>
            <Footer />
        </>
    )
}