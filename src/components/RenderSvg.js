import clubsImg from '../img/c.svg'
import diamondsImg from '../img/d.svg'
import heartsImg from '../img/h.svg'
import spadesImg from '../img/s.svg'

function RenderSvg({suit}) {
    let svg;
    switch(suit) {
        case 'D':
        svg = <img className='suitSvg' src={diamondsImg} alt='diamonds'/>
        break;
        case 'H':
        svg = <img className='suitSvg' src={heartsImg} alt='hearts'/>
        break;
        case 'S':
        svg = <img className='suitSvg' src={spadesImg} alt='spades'/>
        break;
        case 'C':
        svg = <img className='suitSvg' src={clubsImg} alt='clubs'/>
        break;
        default:
        svg = ''
    }
    return svg;
}

export default RenderSvg