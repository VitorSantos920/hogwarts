import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Footer = styled('footer', {
    backgroundColor: '$bgFooter',
    justifyContent: 'center',
    padding: '5rem 0',

    '> div': {
        flexDirection: 'column',
        width: '100%',

        '.footer__top, .footer__bottom': {
            width: '80%',
        },

        '.footer__top': {
            justifyContent: 'space-between',

            'div:not(.footer__col-3) a, span': {
                display: 'block',
                marginTop: 14,
            },

            '.footer__title': {
                fontSize: '3rem',
            },
        },

        '.footer__link, span, .footer__about, p': {
            fontSize: '1.225rem',

            '&:not(.footer__author-credits p)': {
                color: '$lightGray',
            },
        },

        '.footer__link:hover': {
            textDecoration: 'underline',
        },

        '.footer__bottom': {
            margin: '42px 0',
            justifyContent: 'space-between',
            alignItems: 'center',

            '.footer__logo': {
                fontSize: '4rem',
                color: 'inherit',
                fontFamily: '$title',
            },

            '.footer__author-credits': {
                img: {
                    height: 110,
                },

                alignItems: 'center',
            },
        },

        '@bp1': {
            '.footer__top, .footer__bottom': {
                width: '90%',
            },
        },

        '@bp4': {
            '.footer__top, .footer__bottom': {
                textAlign: 'center',
                gap: '2rem',
                justifyContent: 'center',
                flexDirection: 'column',
            },
        },
    },
});
