import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const History = styled('section', {
    gap: 10,
    justifyContent: 'center',
    margin: '$section 0',
    width: '100%',
});

export const ContainerHistory = styled('div', {
    alignItems: 'center',
    gap: 30,
    justifyContent: 'space-evenly',
    maxWidth: '1266px',

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
            fontSize: '1.125rem',
            lineHeight: '$1',
            marginBottom: 20,
            textAlign: 'justify',
        },
    },

    '@bp1': {
        '&': {
            justifyContent: 'space-around',
        },
    },

    '@bp2': {
        '&': {
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
