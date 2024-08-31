import './Header.css';
import catGreen from '/cat-green.png';
import catYellow from '/cat-yellow.png';
import catPawGreen from '/bigCatPaw-green.png';
import catPawYellow from '/bigCatPaw-yellow.png';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <>
        <div id='modal'></div>
        <header>
            <div className='headerElmt'>
                <NavLink to='/home'>
                    <img className='website' src={catPawGreen}
                            onMouseOver={e => e.currentTarget.src = catPawYellow}
                            onMouseOut={e => e.currentTarget.src = catPawGreen}
                    />
                </NavLink>
            </div>
            <div className='headerElmt containerMytitle'>
                <p className='mytitle'>Be A Cat</p>
            </div>
            <div className='headerElmt containerNav'>
                <a target='_blank' href='https://lilineslab.fr'>
                    <img className='mainLogo' src={catGreen}
                        onMouseOver={e => e.currentTarget.src = catYellow}
                        onMouseOut={e => e.currentTarget.src = catGreen}
                    />
                </a>
            </div>
        </header>
        </>
    )
}