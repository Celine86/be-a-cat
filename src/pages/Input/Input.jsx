import './Input.css';
//import { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Guess } from '../../components/common/Guess.jsx';
import { ShowClue } from '../../components/common/ShowClue.jsx';


export function Input() {
    //const [countdown, setCountdown] = useState(15);
    //const navigate = useNavigate();

    /*useEffect(() => {
        if (countdown === 0) {
          navigate(-1);
        } else {
          const timer = setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1500);
          return () => clearTimeout(timer);
        }
      }, [countdown, navigate]);*/

    return (
        <>
            {/* <p className='indication'><span className='countdown'>{countdown}</span></p> */}
            <p className='indication'>Tape dans l'ordre les <span className='highlight'>8</span> lettres du mot mystère !<br />Chaque essai coûte <span className='highlight'>10</span> points !</p>
            <Guess />
            <p className='clues'>Besoin d'un indice ? <br /> Attention chaque indice coûte des points !</p>
            <ShowClue defaultMessage="Premier Indice -10 points" secretMessage="L'hermine est mon symbole" storageKey="indice1-pts" storageValue={10} />
            <ShowClue defaultMessage="Second Indice -20 points" secretMessage="J'étais exempté de la taxe sur le sel, c'est pour cela que mon beurre est salé" storageKey="indice2-pts" storageValue={20} />
            <ShowClue defaultMessage="Troisième Indice -30 points" secretMessage="J'abrite la forêt de Merlin l'Enchanteur" storageKey="indice3-pts" storageValue={30} />
        </>
    )
}
