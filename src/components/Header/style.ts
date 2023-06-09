import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
    backdropFilter: 'blur( 9.5px )',
    justifyContent: 'center',
    position: 'fixed',
    webkitBackdropFilter: 'blur( 9.5px )',
    width: '100vw',
    zIndex: 1,
});

export const DivHeaderContainer = styled('div', {
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: '$title',
    justifyContent: 'space-between',
    maxWidth: '1266px',
    padding: '1.3rem 0',
    transition: 'all 0.3s',
    width: '80%',

    '.header__logo': { fontSize: '4rem' },

    '.header__menu--toggle': { display: 'none' },

    '@bp1': { width: '95%' },

    '@bp2': {
        ul: {
            alignItems: 'center',
            backgroundColor: '#000',
            flexDirection: 'column',
            height: 'calc(100vh - 96.8px)',
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            textAlign: 'center',
            top: '96.8px',
            transform: 'translateX(100%)',
            width: '100%',
        },

        'ul.open': {
            transform: 'translateX(0)',
            transition: 'all 0.2s',

            li: { width: '100%' },
        },

        '.header__menu--toggle': { display: 'block' },
    },
});

export const ListContainer = styled('ul', {
    flexWrap: 'wrap',
    fontSize: '1.8rem',
    gap: '2.2rem',
    listStyle: 'none',

    '.header__item': {
        padding: '.75rem',
        position: 'relative',
        transition: '1s',

        '&::before': {
            backgroundColor: '#fff',
            content: '',
            height: '100%',
            left: 0,
            position: 'absolute',
            transition: '1s',
            top: 0,
            width: 0,
            zIndex: -1,
        },

        '&:hover::before': { width: '100%' },

        '& a': { transition: '1s' },

        '&:hover a': { color: '#000' },
    },
});
