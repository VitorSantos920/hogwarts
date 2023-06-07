import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const CTA = styled('section', {
    background: '#fff',
    textAlign: 'center',
    padding: '2rem 0',

    '.cta__subtitle': {
        color: '$lightGray',
        fontSize: '3rem',
    },

    '.readmore': {
        alignItems: 'center',
        marginTop: '1.25rem',

        '.cta__title': {
            color: '$bgColor',
            fontFamily: '$title',
            fontWeight: 400,
            fontSize: '$title',
        },

        '.cta__icon': {
            height: 45,
            transition: '500ms',
        },

        '&:hover .cta__icon': {
            transform: 'translateX(20px)',
        },
    },
});
