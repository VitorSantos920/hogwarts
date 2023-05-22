import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const Button = styled('button', {
    backgroundColor: 'transparent',
    borderRadius: '1rem',
    borderStyle: 'solid',
    borderWidth: 1,
    fontFamily: '$text',
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '0.5rem 1.5rem',
    position: 'relative',
    transition: '2.5s',
    width: '50%',
    '&:hover::before': {
        width: '100%',
        zIndex: -1,
    },

    '&::before': {
        content: '',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        transition: '1s',
        width: 0,
    },

    variants: {
        house: {
            gryffindor: {
                borderColor: '$house__gryffHighlightColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #ff004c',

                    '&::before': {
                        backgroundColor: '$house__gryffHighlightColor',
                    },
                },
            },

            slytherin: {
                borderColor: '$house__slythHighlightColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #00ffae',

                    '&::before': {
                        backgroundColor: '$house__slythHighlightColor',
                    },
                },
            },

            ravenclaw: {
                borderColor: '$house__ravenColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #275872',

                    '&::before': {
                        backgroundColor: '$house__ravenColor',
                    },
                },
            },

            hufflepuff: {
                borderColor: '$house__huffleHighlightColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #ffbb00',

                    '&::before': {
                        backgroundColor: '$house__huffleHighlightColor',
                    },
                },
            },

            default: {
                borderColor: '#fff',
                '&:hover': {
                    color: '$bgColor',

                    boxShadow: '0 0 10px 5px #fff',

                    '&::before': {
                        backgroundColor: '#fff',
                    },
                },
            },
        },
    },
});
