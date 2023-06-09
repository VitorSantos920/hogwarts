import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Dumbledore = styled('section', {
    '.dumbledore__content': {
        padding: '0 5rem',
        '.dumbledore__about': { margin: '21px 0' },

        '.dumbledore__btn': {
            minWidth: '250px',
            width: '20%',
        },

        '@bp5': { padding: '0 2rem' },
    },
});

export const InitialContent = styled('div', {
    background: `url(dumbledore.png) no-repeat top`,
    backgroundSize: 'cover',
    height: '1000px',
    padding: '5rem',

    '.dumbledore__initial-content': {
        width: '30%',

        '.dumbledore__title': {
            fontSize: '7rem',
            marginBottom: '1.5rem',
        },

        '.dumbledore__phrase': {
            fontSize: '2rem',
            lineHeight: 1.3,
            textAlign: 'left',
        },

        '@bp4': {
            '&': {
                width: '50%',

                '.dumbledore__title': { fontSize: '5rem' },
            },
        },

        '@bp6': {
            '.dumbledore__title': { fontSize: '4rem' },
        },
    },

    '@bp5': { padding: '2rem' },
});
