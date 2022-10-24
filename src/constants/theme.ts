import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#109CF1",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#334D6E",
        },
        error: {
            main: "#F7685B"
        },
        success: {
            main: "#2ED47A"
        },
        text: {
            secondary: "#90A0B7",
            primary: "#334D6E",
        }
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
});

export default theme;