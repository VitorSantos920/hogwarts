import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Protections = styled('section', {
    '> div': {
        padding: '0 5rem',

        '.protections__description': { marginTop: '$pSpace' },
    },

    '@bp5': {
        '> div': { padding: '0 2rem' },
    },
});
