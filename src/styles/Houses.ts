import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Houses = styled('section', {
    '& > div': {
        flexDirection: 'column',

        '.houses__title': { fontSize: '$title' },

        '.houses__description': {
            textAlign: 'center',
            width: '72.5%',
        },
    },
});
