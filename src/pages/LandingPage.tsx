import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Category from "../components/Category";
import TopSelling from "../components/TopSelling";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

function LandingPage() {
  return (
    <Box sx={{ height: "auto" }}>
      <Header />
      <Body />
      <Category />
      <TopSelling />
      <Steps />
      <Testimonials />
      <Partner />
      <Footer />
    </Box>
  );
}

export default LandingPage;
