import { keyframes } from '@stitches/react';
import { stitches } from '../../../stitches.config';

import background from '../../img/bgHogwarts.jpeg';

const { styled } = stitches;

const move = keyframes({
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(1.25rem)' },
});

export const Home = styled('section', {
    alignItems: 'center',
    background: `url(${background}) fixed center no-repeat `,
    backgroundSize: 'cover',
    color: '#fff',
    flexDirection: 'column',
    gap: '4.5rem',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: '100px',
    textAlign: 'center',

    '.home__title': { fontSize: '7rem' },

    '.home__subtitle': { fontSize: '3rem' },

    '.home__arrowDown': {
        animation: `${move} 1s ease-in-out infinite alternate`,
    },
});
