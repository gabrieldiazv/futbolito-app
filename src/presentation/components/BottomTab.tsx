import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState } from "react";
import { Link } from "react-router-dom";

const BottomTab: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid #ccc", // Aquí se define la línea divisoria
        backgroundColor: "#fff", // Color de fondo opcional
      }}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Noticias"
          icon={<NewspaperIcon />}
          component={Link}
          to="/home"
        />
        <BottomNavigationAction
          label="Jugadores"
          icon={<PersonIcon />}
          component={Link}
          to="/jugadores"
        />
        <BottomNavigationAction
          label="Equipos"
          icon={<GroupsIcon />}
          component={Link}
          to="/equipos"
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomTab;
