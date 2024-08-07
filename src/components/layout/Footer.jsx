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
                <a target='_blank' href='https://www.linkedin.com/in/celineobringer/'>
                    <img className='socialIconsImg' src={linkedinGreen}
                        onMouseOver={e => e.currentTarget.src = linkedinYellow}
                        onMouseOut={e => e.currentTarget.src = linkedinGreen}
                    />
                </a>
                <a target='_blank' href='https://codepen.io/Celine86'>
                    <img className='socialIconsImg' src={codepenGreen}
                        onMouseOver={e => e.currentTarget.src = codepenYellow}
                        onMouseOut={e => e.currentTarget.src = codepenGreen}
                    />
                </a>
                <a target='_blank' href='https://github.com/Celine86'>
                    <img className='socialIconsImg' src={githubGreen}
                        onMouseOver={e => e.currentTarget.src = githubYellow}
                        onMouseOut={e => e.currentTarget.src = githubGreen}
                    />
                </a>
            </div>
        </footer>
    )
}