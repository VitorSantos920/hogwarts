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
    color: 'white',
    gap: 30,
    justifyContent: 'center',
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
});
