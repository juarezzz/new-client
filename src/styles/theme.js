import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1b9aaa',
            light: '#e1f2fe'
        },
        secondary: {
            main: '#D05353'
        },
        dark: {
            main: '#000',
            light: '#444545'
        },
        light: {
            main: '#fffffb',
            contrastText: '#444545'
        }
    },
    typography: {
        fontFamily: "'Plus Jakarta Sans', sans-serif"
    }
})

export default customTheme