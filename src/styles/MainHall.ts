import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MainHall = styled('section', {
    '& > div': {
        margin: '0 5rem',

        '.mainhall__img': {
            width: '100%',
        },

        '.mainhall__content': {
            justifyContent: 'space-between',

            '.mainhall__title': {
                fontSize: '7rem',
            },

            '.mainhall__description': {
                marginLeft: '5%',
                width: '70%',
            },

            '@bp2': {
                '.mainhall__title': {
                    textAlign: 'center',
                },
            },

            '@bp3': {
                '&': {
                    alignItems: 'center',
                    flexDirection: 'column',

                    '.mainhall__description': {
                        marginLeft: '0',
                        width: '100%',
                    },
                },
            },

            '@bp6': {
                '.mainhall__title': {
                    fontSize: '5rem',
                },
            },
        },
    },
});
