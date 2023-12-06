import { extendTheme } from "native-base";

const theme = extendTheme({
    colors: {
        primary: {
            50: '#e9f2ec',
            100: '#d3e5d9',
            200: '#bdd8c7',
            300: '#a7cbb5',
            400: '#91bea3',
            500: '#7bb292',
            600: '#65a580',
            700: '#4d986f',
            800: '#328c5f',
            900: '#007f4e',
        },
        secondary: {
            50: '#fff2eb',
            100: '#ffe4d7',
            200: '#ffd7c3',
            300: '#ffc9af',
            400: '#ffbc9b',
            500: '#fdae87',
            600: '#fba072',
            700: '#f9915c',
            800: '#f68344',
            900: '#f37324',
        }
    },

    components: {
        Box: {
            variants: {
                container: {
                    flex: 1,
                    padding: 5,
                },
                coloredContainer: {
                    flex: 1,
                    padding: 5,
                    backgroundColor: "primary.800"
                }
            }
        },


        Card: {
            baseStyle: {
                backgroundColor: '#fff',
                borderRadius: 15,
            }
        },

        Text: {
            baseStyle: {
                color: 'secondary.50'
            },
            variants: {
                dark: {
                    color: '#000'
                }
            }
        },

        Input: {
            baseStyle: {
                borderRadius: 15
            }
        },

        IconButton: {
            baseStyle: {
                borderRadius: 25
            }
        },

        Heading: {
            baseStyle: {
                color: 'secondary.50'
            },
            variants: {
                dark: {
                    color: '#000'
                }
            }
        },

    }
})

export default theme

// Theme Color
// ->C6EBBE
// ->A9DBB8
// ->7CA5B8
// ->38369A
// ->020887