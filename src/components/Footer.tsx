import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from "../assets/Jadoo..png";
import React from "react";

import Facebook from "../assets/fbicon.png";
import Instagram from "../assets/instaicon.png";
import Twitter from "../assets/twittericon.png";
import playstore from "../assets/Google Play.png";
import appstore from "../assets/Play Store.png";

function Footer() {
  const footerList = [
    {
      heading: "Company",
      items: ["About", "Careers", "Mobile"],
      clickable: true,
    },
    {
      heading: "Contact",
      items: ["Help/FAQ", "Press", "Affilates"],
      clickable: true,
    },
    {
      heading: "More",
      items: ["Airlinefees", "Airline", "Low fare tips"],
      clickable: true,
    },
  ];

  return (
    <Box marginTop={10}>
      <>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5 }}
          sx={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Box>
              <img src={logo} alt="img" draggable="false" />
            </Box>
            <Stack>
              <Typography sx={{ fontFamily: "poppins", fontSize: "16px" }}>
                Book your trip in minute, get full
                <br />
                Control for much longer.
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Box
              display={{
                xs: "Column",
                md: "row",
              }}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <Grid container rowGap={5} max-width="100vw">
                {footerList.map((footerItem) => {
                  return (
                    <Grid item xs={6} sm={6} lg={3}>
                      <Typography
                        sx={{
                          color: "#080809",
                          fontSize: { md: "21px", xs: "16px" },
                          fontWeight: "bold",
                          mb: 2,
                          fontFamily: "poppins",
                        }}
                      >
                        {footerItem.heading}
                      </Typography>
                      <Grid container rowGap={1}>
                        {footerItem.items.map((element) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sx={{
                                ...(footerItem.clickable === true && {
                                  cursor: `pointer`,
                                }),
                              }}
                            >
                              {footerItem.heading === "Contact Us" && (
                                <Typography
                                  display="flex"
                                  alignItems="center"
                                  gap={2}
                                  textAlign={"right"}
                                  sx={{
                                    fontSize: "18px",
                                    fontFamily: "poppins",
                                    color: "#5E6282",
                                  }}
                                >
                                  {element}
                                </Typography>
                              )}
                              {element === "Careers" ? (
                                <Box
                                  sx={{ display: "flex", columnGap: "10px" }}
                                >
                                  {" "}
                                  <Typography
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                    textAlign={"right"}
                                    sx={{
                                      fontSize: "18px",
                                      fontFamily: "poppins",
                                      color: "#5E6282",
                                    }}
                                  >
                                    {element}
                                  </Typography>
                                </Box>
                              ) : (
                                <Typography
                                  sx={{
                                    fontSize: "18px",
                                    fontFamily: "poppins",
                                    color: "#5E6282",
                                  }}
                                >
                                  {footerItem.heading !== "Contact Us" &&
                                    element}
                                </Typography>
                              )}
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
          {/* CONTACT SESSION */}
          <Stack>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                rowGap: "20px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <a href="https://" target="_blank">
                  <img
                    style={{ marginRight: "10px" }}
                    draggable="false"
                    src={Twitter}
                    alt=""
                  />
                </a>

                <a href="https://" target="_blank">
                  <img
                    style={{ marginRight: "10px" }}
                    draggable="false"
                    src={Facebook}
                    alt=""
                  />
                </a>
                <a href="https://" target="_blank">
                  <img
                    style={{ marginRight: "10px" }}
                    draggable="false"
                    src={Instagram}
                    alt=""
                  />
                </a>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "20px",
                  color: "#080809",
                  textAlign: "center",
                }}
              >
                {" "}
                Discover our app
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {" "}
              <Box>
                {" "}
                <img src={playstore} />
              </Box>
              <Box>
                <img src={appstore} />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </>
    </Box>
  );
}

export default Footer;
