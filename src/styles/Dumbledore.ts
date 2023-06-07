import { stitches } from '../../stitches.config';
import DumbledoreImg from '../img/dumbledore.png';

const { styled } = stitches;

export const Dumbledore = styled('section', {
    '> div > div:last-child': {
        padding: '0 3rem',

        '.dumbledore__about': {
            margin: '21px 0',
        },

        '.dumbledore__btn': {
            width: '20%',
        },
    },
});

export const InitialContent = styled('div', {
    background: `url(${DumbledoreImg}) no-repeat top`,
    backgroundSize: 'cover',
    padding: '5rem',
    height: '1000px',

    '.dumbledore__initial-content': {
        width: '30%',

        '.dumbledore__title': {
            fontSize: '7rem',
            marginBottom: '1.5rem',
        },

        '.dumbledore__phrase': {
            fontSize: '2rem',
            textAlign: 'left',
            lineHeight: 1.3,
        },
    },
});