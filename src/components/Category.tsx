import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import weather from "../assets/weather.png";
import flight from "../assets/Flight.png";
import eventimage from "../assets/events.png";
import custom from "../assets/customization.png";


const CategoryData = [
  {
    id: 1,
    Image: weather,
    title: "Calculated Weather ",
    caption: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 1,
    Image: flight,
    title: "Best Flights",
    caption: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: 3,
    Image: eventimage,
    title: "Local Events",
    caption:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    id: 4,
    Image: custom,
    title: "Customization",
    caption: "We deliver outsourced aviation services for military customers",
  },
];

function Category() {
  return (
    <Box sx={{ padding: "30px" }}>
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
          {" "}
          Category
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "volkhov",
            fontWeight: "bold",
          }}
        >
          We Offer Best Services{" "}
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={4}>
          {CategoryData.map((element) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={element.title}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                borderRadius={5}
                sx={{
                  padding: "20px",
                  background: "#fff",
                  border: "1px solid black",
                  height: "100%",
                  
                }}
              >
                <img src={element.Image} alt="img" draggable="false" />
                <Typography
                  sx={{
                    m: 2,
                    whiteSpace: "nowrap",
                    fontFamily: "outfit",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {element.title}
                </Typography>
                <Typography
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textAlign="center"
                  sx={{
                    fontFamily: "outfit",
                    fontWeight: 300,
                    width: "100%",
                    fontSize: "14px",
                    maxHeight: "140px",
                  }}
                >
                  {element.caption}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Category;
