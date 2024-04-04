import React from "react";
import { Box, Typography } from "@mui/material";
import navigation from "../assets/Navigation.png";
import italy from "../assets/italy.png";
import uk from "../assets/UK.jpg";
import europe from "../assets/europe.png";


const TopSelling = () => {
  return (
    <>
      <Box sx={{ mt: "25px" }}>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontFamily: "poppins",
              textTransform: "uppercase",
              color: "#5E6282",
            }}
          >
            Top Selling
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "50px",
              fontFamily: "volkhov",
              fontWeight: "bold",
            }}
          >
            Top Destinations
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* itali */}
        <Box
          sx={{
            width: "315px",
            height: "420px",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "16px",
          }}
        >
          <Box>
            <img src={italy} alt="itali" />
          </Box>
          <Box padding={1}>
            {" "}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                Rome, Italy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                $5,42k
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <img
                src={navigation}
                alt="navigation icon"
                style={{ marginRight: 8 }}
              />
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "16px",
                  color: "#5E6282",
                }}
              >
                10 Days Trip
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* uk */}
        <Box
          sx={{
            width: "315px",
            height: "420px",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "16px",
          }}
        >
          <Box>
            <img src={uk} alt="itali" />
          </Box>
          <Box padding={1}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                Rome, Italy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                $5,42k
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <img
                src={navigation}
                alt="navigation icon"
                style={{ marginRight: 8 }}
              />
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "16px",
                  color: "#5E6282",
                }}
              >
                10 Days Trip
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* europe */}
        <Box
          sx={{
            width: "315px",
            height: "420px",
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "16px",
          }}
        >
          <Box>
            <img src={europe} alt="itali" />
          </Box>
          <Box padding={1}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                Rome, Italy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  color: "#5E6282",
                }}
              >
                $5,42k
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <img
                src={navigation}
                alt="navigation icon"
                style={{ marginRight: 8 }}
              />
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "16px",
                  color: "#5E6282",
                }}
              >
                10 Days Trip
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopSelling;
