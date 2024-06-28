import { Route, Routes, useLocation } from "react-router";
import { Equipos, Home, Jugadores, Login } from "./presentation/pages";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./config/theme.config";
import useThemeStore from "./presentation/store/theme/useTheme";
import BottomTab from "./presentation/components/BottomTab";

function App() {
  const { isDarkMode } = useThemeStore();
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jugadores" element={<Jugadores />} />
          <Route path="/equipos" element={<Equipos />} />
        </Routes>
        {location.pathname !== "/" && <BottomTab />}
      </ThemeProvider>
    </>
  );
}

export default App;
