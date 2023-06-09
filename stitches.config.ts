import { createStitches } from '@stitches/react';

export const stitches = createStitches({
    theme: {
        colors: {
            house__gryffColor: '#a81945',
            house__gryffHighlightColor: '#ff004c',

            house__slythColor: '#007952',
            house__slythHighlightColor: '#00ffae',

            house__ravenColor: '#275872',

            house__huffleColor: '#ffcd48',
            house__huffleHighlightColor: '#ffbb00',
            house__huffleBeforeColor: '#a08437',

            bgColor: '#1f1d1d',
            lightGray: '#808080',
            bgFooter: '#131212',
        },
        fonts: {
            title: 'Almendra SC, serif',
            text: 'Aref Ruqaa, serif',
        },
        fontSizes: {
            title: '5rem',
            figcaption: '2.5rem',
        },
        space: {
            section: '174px',
            pSpace: '30px',
        },
        lineHeights: {
            1: 2.5,
        },
    },
    media: {
        bp1: '(max-width: 950px)',
        bp2: '(max-width: 820px)',
        bp3: '(max-width: 1150px)',
        bp4: '(max-width: 770px)',
        bp5: '(max-width: 650px)',
        bp6: '(max-width: 490px)',
    },
});

const injectGlobalStyles = stitches.globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    html: {
        scrollBehavior: 'smooth',
    },

    body: {
        backgroundColor: '$bgColor',
        color: '#fff',
        fontFamily: '$text',
    },

    'h1, h2, h3, h4, h5': {
        fontFamily: '$title',
        fontWeight: 400,
        fontSize: '$title',
    },

    p: {
        lineHeight: '$1',
        fontSize: '1.225rem',
        textAlign: 'justify',
    },

    a: {
        color: '#fff',
        textDecoration: 'none',
    },

    'section:not(:first-child)': {
        margin: '$section 0',
        justifyContent: 'center',
    },

    'section ::selection:not(img)': {
        background: '#000',
        color: '#fff',
    },

    '.flex': {
        display: 'flex',
    },

    '.bold': {
        fontWeight: 700,
    },

    '::-webkit-scrollbar': {
        background: 'transparent',
        width: 10,
    },

    '::-webkit-scrollbar-thumb': {
        background: '#fff',
        borderRadius: '1rem',
    },
});

injectGlobalStyles();
