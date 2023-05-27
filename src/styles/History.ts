import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const History = styled('section', {
    '.history__title': {
        fontSize: '$title',
        textAlign: 'right',
    },

    '.divider': {
        backgroundColor: '#fff',
        height: '100%',
        width: '2px',
    },

    '.history__about': {
        width: '43%',

        '.history__description': {
            marginBottom: 20,
        },
    },

    '@bp1': {
        '&': {
            justifyContent: 'space-around',
        },
    },

    '& > div': {
        '@bp2': {
            flexDirection: 'column',
            gap: '0.5rem',

            '.history__title': {
                textAlign: 'center',

                br: { display: 'none' },
            },

            '.history__about': {
                width: '70%',

                '.history__description': {
                    marginBottom: 30,
                },

                button: {
                    width: '100%',
                },
            },
        },
    },
});
