import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Footer = styled('footer', {
    backgroundColor: '$bgFooter',
    justifyContent: 'center',
    padding: '5rem 0',

    '> div': {
        flexDirection: 'column',
        width: '100%',

        '.footer__top, .footer__bottom': { width: '80%' },

        '.footer__top': {
            justifyContent: 'space-between',

            'div:not(.footer__col-3) a, span': {
                display: 'block',
                marginTop: 14,
            },

            '.footer__title': { fontSize: '3rem' },
        },

        '.footer__link, span, .footer__about': {
            color: '$lightGray',
            fontSize: '1.225rem',
        },

        '.footer__link:hover': { textDecoration: 'underline' },

        '.footer__bottom': {
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '42px 0',

            '.footer__logo': {
                color: 'inherit',
                fontFamily: '$title',
                fontSize: '4rem',
            },

            '.footer__author-credits': {
                alignItems: 'center',

                img: { height: 110 },
            },
        },

        '@bp1': {
            '.footer__top, .footer__bottom': { width: '90%' },
        },

        '@bp4': {
            '.footer__top, .footer__bottom': {
                flexDirection: 'column',
                gap: '2rem',
                justifyContent: 'center',
                textAlign: 'center',
            },

            '.footer__author-credits': {
                flexDirection: 'column',

                p: { textAlign: 'center' },
            },
        },
    },
});
