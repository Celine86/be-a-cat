import './Footer.css';
import linkedinGreen from '/linkedin-green.png';
import linkedinYellow from '/linkedin-yellow.png';
import codepenGreen from '/codepen-green.png';
import codepenYellow from '/codepen-yellow.png';
import githubGreen from '/github-green.png';
import githubYellow from '/github-yellow.png';

export function Footer() {
    return (
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
    )
}