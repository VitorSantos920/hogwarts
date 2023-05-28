import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const Button = styled('button', {
    backgroundColor: 'transparent',
    borderRadius: '1rem',
    borderStyle: 'solid',
    borderWidth: 1,
    fontFamily: '$text',
    fontSize: '1.5rem',
    color: 'inherit',
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '0.5rem 1.5rem',
    position: 'relative',
    transition: '2.5s',
    width: '50%',
    minWidth: 170,

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
                borderColor: '$house__gryffColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #ff004c',
                    borderColor: '$house__gryffHighlightColor',
                    '&::before': {
                        backgroundColor: '$house__gryffHighlightColor',
                    },
                },
            },

            slytherin: {
                borderColor: '$house__slythColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #00ffae',
                    borderColor: '$house__slythHighlightColor',

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
                borderColor: '$house__huffleColor',

                '&:hover': {
                    boxShadow: '0 0 10px 5px #ffbb00',
                    borderColor: '$house__huffleHighlightColor',

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
