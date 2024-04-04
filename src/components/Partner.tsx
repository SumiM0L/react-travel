import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import { Box } from "@mui/material";

function Partner() {
  return (
    <Box
      marginTop={20}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box>
        <img src={p1} alt="P1" />
      </Box>
      <Box>
        {" "}
        <img src={p2} alt="P1" />
      </Box>
      <Box>
        {" "}
        <img src={p3} alt="P1" />
      </Box>
      <Box>
        {" "}
        <img src={p4} alt="P1" />
      </Box>
      <Box>
        {" "}
        <img src={p5} alt="P1" />
      </Box>
    </Box>
  );
}

export default Partner;
