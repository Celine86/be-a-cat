import './Header.css';
import catGreen from '/imgs/cat-green.png';
import catYellow from '/imgs/cat-yellow.png';
import catPawGreen from '/imgs/bigCatPaw-green.png';
import catPawYellow from '/imgs/bigCatPaw-yellow.png';
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
                <h1 className='mytitle'>Be A Cat</h1>
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