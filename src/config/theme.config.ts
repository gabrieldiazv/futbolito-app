import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
            light: "#218af3",
            dark: "#0d47a1",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#f5f5f5",
            paper: "#f5f5f5",
        },
        text: {
            primary: "#000",
        }
    },
});

// Tema Oscuro
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
            light: "#218af3",
            dark: "#0d47a1",
        },
        secondary: {
            main: "#dc004e",
        },
        text: {
            primary: "#fff",
        },
        background: {
            default: "#121212",
            paper: "#121212",
        },
    },
});

