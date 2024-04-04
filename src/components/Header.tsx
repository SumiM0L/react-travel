import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/Jadoo.png";
import decoreBackground from "../assets/Decore.png";

function Header() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      <Box sx={{ position: "absolute", top: 0, right: 0, zIndex: 0 }}>
        <img src={decoreBackground} alt="background" />
      </Box>
      <Box>
        <img src={logo} alt="logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          fontSize: "17px",
          fontFamily: "sans-serif",
        }}
      >
        <Typography>Desitnations</Typography>
        <Typography>Hotels</Typography>
        <Typography>Flights</Typography>
        <Typography>Bookings</Typography>
        <Typography>Login</Typography>
        <Typography>Sign</Typography>
        <Typography>EN</Typography>
      </Box>
    </Box>
  );
}

export default Header;
