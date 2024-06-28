import { ReactNode } from "react";
import TopBar from "../components/TopBar";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
  title?: string;
}

const LayoutPrincipal = ({ children, title = "sin titulo" }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <TopBar title={title} />
      {children}
    </Box>
  );
};

export default LayoutPrincipal;
