import { Box, Typography, useTheme } from "@mui/material";
import avatar from "../assets/avtar.png";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Testimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box marginTop={10}>
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
              Testimonials
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
              What people say <br />
              about Us.
            </Typography>
          </Box>
          <Box>
            <MoreHorizIcon color="disabled" fontSize="large" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* first review */}
          <Box>
            <Box
              sx={{
                width: "auto",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                position: "relative",
                borderRadius: "12px",
                zIndex: 4,
                marginBottom: "-65px",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={avatar}
                alt="person"
                style={{
                  position: "absolute",
                  zIndex: 3,
                  left: "-48px",
                  top: "-40px",
                  border: "2px solid #fff",
                  borderRadius: "50%",
                }}
              />
              <Box padding={3}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#5E6282",
                      fontFamily: "poppins",
                    }}
                  >
                    “On the Windows talking painted pasture yet its <br />
                    express parties use. Sure last upon he same as <br />
                    knew next. Of believed or diverted no.”
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "#5E6282",
                      fontFamily: "poppins",
                      fontWeight: "bold",
                    }}
                  >
                    Mike Taylor
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#5E6282",
                      fontFamily: "poppins",
                    }}
                  >
                    Lahore, Pakistan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* second review */}
          <Box sx={{ display: "flex", marginLeft: "20px" }}>
            <Box sx={{ marginLeft: "50px", marginBottom: "-65px" }}>
              <Box
                sx={{
                  width: "auto",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  position: "relative",
                  borderRadius: "12px",
                  margin: "-30px",
                  zIndex: 2,
                }}
              >
                <Box padding={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#5E6282",
                        fontFamily: "poppins",
                      }}
                    >
                      “On the Windows talking painted pasture yet its <br />
                      express parties use. Sure last upon he same as <br />
                      knew next. Of believed or diverted no.”
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "#5E6282",
                        fontFamily: "poppins",
                        fontWeight: "bold",
                      }}
                    >
                      Chris Thomas
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#5E6282",
                        fontFamily: "poppins",
                      }}
                    >
                      CEO of Red Button
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ zIndex: 4, position: "relative", left: "60px" }}>
              <Box>
                <KeyboardArrowUpIcon />
              </Box>
              <Box>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
