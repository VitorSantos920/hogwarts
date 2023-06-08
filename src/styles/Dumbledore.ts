import { stitches } from '../../stitches.config';
// import DumbledoreImg from '../img/dumbledore.png';

const { styled } = stitches;

export const Dumbledore = styled('section', {
    '.dumbledore__content': {
        padding: '0 5rem',
        '.dumbledore__about': {
            margin: '21px 0',
        },

        '.dumbledore__btn': {
            width: '20%',
            minWidth: '250px',
        },

        '@bp5': {
            padding: '0 2rem',
        },
    },
});

export const InitialContent = styled('div', {
    background: `url(dumbledore.png) no-repeat top`,
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

        '@bp4': {
            '&': {
                width: '50%',
                '.dumbledore__title': {
                    fontSize: '5rem',
                },
            },
        },

        '@bp6': {
            '.dumbledore__title': {
                fontSize: '4rem',
            },
        },
    },

    '@bp5': {
        padding: '2rem',
    },
});
