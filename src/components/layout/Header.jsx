import './Header.css';
import catGreen from '/cat-green.png';
import catYellow from '/cat-yellow.png';
import catPawGreen from '/bigCatPaw-green.png';
import catPawYellow from '/bigCatPaw-yellow.png';

export function Header() {
    return (
        <>
        <div id='modal'></div>
        <header>
            <div className='header__elmt'>
                <a href='/'>
                    <img className='website' src={catPawGreen}
                            onMouseOver={e => e.currentTarget.src = catPawYellow}
                            onMouseOut={e => e.currentTarget.src = catPawGreen}
                    />
                </a>
            </div>
            <div className='header__elmt container__mytitle'>
                <h1 className='mytitle'>Be A Cat</h1>
            </div>
            <div className='header__elmt container__nav'>
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