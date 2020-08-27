import {theme} from '@chakra-ui/core'
export default {
    ...theme,
    breakpoints: ["30em", "48em", "62em", "80em"],
    fonts: {
        heading: '"Oxygen", sans-serif',
        body: '"Work Sans", sans-serif',
    },
    BoxShadows: {
        md: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    lineHeights: {
        ...theme.lineHeights,
        body: "150%"
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
};