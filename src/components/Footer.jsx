import './Footer.css';
import linkedinGreen from '../assets/imgs/linkedin-green.png';
import linkedinYellow from '../assets/imgs/linkedin-yellow.png';
import codepenGreen from '../assets/imgs/codepen-green.png';
import codepenYellow from '../assets/imgs/codepen-yellow.png';
import githubGreen from '../assets/imgs/github-green.png';
import githubYellow from '../assets/imgs/github-yellow.png';

export function Footer() {
    return (
        <>
            <footer>
                <div className='socialIcons'>
                    <a href="#">
                        <img src={linkedinGreen}
                            onMouseOver={e => e.currentTarget.src = linkedinYellow}
                            onMouseOut={e => e.currentTarget.src = linkedinGreen}
                        />
                    </a>
                    <a href="#">
                        <img src={codepenGreen}
                            onMouseOver={e => e.currentTarget.src = codepenYellow}
                            onMouseOut={e => e.currentTarget.src = codepenGreen}
                        />
                    </a>
                    <a href="#">
                        <img src={githubGreen}
                            onMouseOver={e => e.currentTarget.src = githubYellow}
                            onMouseOut={e => e.currentTarget.src = githubGreen}
                        />
                    </a>
                </div>
            </footer>
        </>
    )
}