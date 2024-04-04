import { Box, Typography } from "@mui/material";
import one from "../assets/1.png";
import two from "../assets/2.png";
import threee from "../assets/3.png";
import stepimage from "../assets/step.png";
import girlimage from "../assets/girl.jpg";
import leaf from "../assets/leaf.png";
import map from "../assets/map.png";
import send from "../assets/send.png";
import buildingicon from "../assets/building .png";
import progressbar from "../assets/progressbar.png";
import maskimage from "../assets/mask.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

function Steps() {
  return (
    <Box
      sx={{
        display: "flex",

        rowGap: "20px",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Box marginBottom={1}>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "poppins",
              color: "#5E6282",
            }}
          >
            Easy and Fast
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography
            sx={{
              fontSize: "50px",
              fontFamily: "volkhov",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            Book your next trip
            <br /> in 3 easy steps
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", gap: "10px", rowGap: "20px" }}>
            <Box>
              <img src={one} alt="one" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontWeight: "bold",
                  }}
                >
                  Choose Destination
                </Typography>
              </Box>
              <Box>
                {" "}
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontSize: "16px",
                    fontWeight: "regular",
                  }}
                >
                  Choose your dream destination and embark on a journey of a
                  lifetime.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box>
              <img src={two} alt="two" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontWeight: "bold",
                  }}
                >
                  Make Payment
                </Typography>
              </Box>
              <Box>
                {" "}
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontSize: "16px",
                    fontWeight: "regular",
                  }}
                >
                  Secure your travel plans with a hassle-free payment process.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box>
              <img src={threee} alt="three" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontWeight: "bold",
                  }}
                >
                  Reach Airport on Selected Date
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "#5E6282",
                    fontSize: "16px",
                    fontWeight: "regular",
                  }}
                >
                  Arrive at the airport on your selected date and let the
                  adventure begin!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        {" "}
        {/* <Box>
          <img src={stepimage} alt="stepsupport" draggable="false" />
        </Box> */}
        <Box
          sx={{
            // height: "400px",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "16px",
            padding: "25px",
            position: "relative",
          }}
        >
          <Box sx={{ marginBottom: "15px" }}>
            <img src={girlimage} alt="girl" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#080809",
                }}
              >
                Trip To Greece
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: "16px",
                      color: "#84829A",
                    }}
                  >
                    14-29 June | by Robbin joseph
                  </Typography>{" "}
                </Box>
                <Box sx={{ display: "flex", marginTop: "20px", gap: "10px" }}>
                  <Box>
                    <img src={leaf} alt="leaf" />
                  </Box>
                  <Box>
                    <img src={map} alt="map" />
                  </Box>
                  <Box>
                    <img src={send} alt="send" />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "269px",
                  height: "127px",
                  borderRadius: "12px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  position: "absolute",
                  right: "-120px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    margin: "6px 0px 0px 6px",
                  }}
                >
                  <Box>
                    {" "}
                    <img src={maskimage} alt="mask" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "14px",
                        color: "#84829A",
                      }}
                    >
                      Ongoing
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        fontWeight: "medium",
                      }}
                    >
                      Trip to rome
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "14px",
                      }}
                    >
                      40% completed
                    </Typography>
                    <img src={progressbar} alt="progressbar" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2.5rem",
              }}
            >
              <Box>
                <Box sx={{ display: "flex" }}>
                  <img src={buildingicon} alt="building" />
                  <Typography sx={{ fontFamily: "16px", color: "#84829A" }}>
                    24 People going
                  </Typography>
                </Box>
              </Box>
              <Box>
                {" "}
                <FavoriteBorderIcon color="secondary" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Steps;
