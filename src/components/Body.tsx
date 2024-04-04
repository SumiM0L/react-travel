import { Box, Typography } from "@mui/material";
import React from "react";
import travelpersonimage from "../assets/Traveller 1.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Body() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Box marginTop={4} marginBottom={2}>
            <Typography
              sx={{
                color: "#DF6951",
                fontSize: "20px",
                fontFamily: "poppins",
                textTransform: "uppercase",
              }}
            >
              Best Destinations around the world
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              sx={{
                color: "#181E4B",
                fontSize: "84px",
                fontWeight: "bold",
                lineHeight: 1,
                fontFamily: "volkhov",
              }}
            >
              Travel, enjoy <br />
              and live a new
              <br /> and full life
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography sx={{ fontSize: "16px", fontFamily: "poppins" }}>
              Built Wicket longer admire do barton vanity itself do in it.
              <br />
              Preferred to sportsmen it engrossed listening. Park gate <br />
              sell they west hard for the.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#F1A501",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#181E4B",
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                }}
              >
                Find out more
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <PlayCircleIcon style={{ color: "#DF6951" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {" "}
                  Play Demo
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ position: "relative" }}>
            <img src={travelpersonimage} alt="image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Body;
