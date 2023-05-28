import { keyframes } from '@stitches/react';
import { stitches } from '../../../stitches.config';

const { styled } = stitches;

const brightness = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export const HouseContainer = styled('section', {
    alignItems: 'center',
    gap: '4.5rem',
    position: 'relative',

    '.house__content': {
        width: '42%',

        '.house__phrase': {
            margin: '$phrase 0',
        },

        '&::before': {
            content: '',
            position: 'absolute',
            width: 70,
            height: '100%',
            filter: 'blur(110px)',
            animation: `${brightness} 2s infinite alternate-reverse ease-in-out`,
        },
    },

    '.house__characteristics': {
        justifyContent: 'space-between',
        margin: '50px 0',

        figure: {
            textAlign: 'center',

            figcaption: {
                fontSize: '$figcaption',
            },
        },
    },

    '.house__img': {
        height: '600px',
    },

    variants: {
        house: {
            gryffindor: {
                '.house__content': {
                    '& ::selection:not(img)': {
                        backgroundColor: '$house__gryffColor',
                    },

                    '&::before': {
                        backgroundColor: '$house__gryffColor',
                    },
                    '.house__title, figcaption': {
                        color: '$house__gryffColor',
                    },
                },
            },

            slytherin: {
                '.house__content': {
                    order: 1,
                    textAlign: 'right',

                    '& ::selection:not(img)': {
                        backgroundColor: '$house__slythColor',
                    },

                    '&::before': {
                        backgroundColor: '$house__slythColor',
                    },

                    '.house__phrase': {
                        textAlign: 'right',
                    },

                    '.house__title, figcaption': {
                        color: '$house__slythColor',
                    },
                },
            },

            ravenclaw: {
                '.house__content': {
                    '&::before': {
                        backgroundColor: '$house__ravenColor',
                    },

                    '& ::selection:not(img)': {
                        backgroundColor: '$house__ravenColor',
                    },
                    '.house__title, figcaption': {
                        color: '$house__ravenColor',
                    },
                },
            },

            hufflepuff: {
                '.house__content': {
                    order: 1,
                    textAlign: 'right',

                    '&::before': {
                        backgroundColor: '$house__huffleBeforeColor',
                    },

                    '& ::selection:not(img)': {
                        backgroundColor: '$house__huffleColor',
                    },

                    '.house__phrase': {
                        textAlign: 'right',
                    },

                    '.house__title, figcaption': {
                        color: '$house__huffleColor',
                    },
                },
            },
        },
    },
});
