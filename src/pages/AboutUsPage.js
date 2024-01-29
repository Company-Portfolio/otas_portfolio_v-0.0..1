import React from "react";
import { Box, Grid } from "@mui/material";
import AboutusDetail from "../components/AboutusDetail";
import AboutOtasTeam from "../components/AboutOtasTeam";
import OurValue from "../components/OurValue";
import "./../style/aboutus.css";
import OurMission from "../components/OurMission";
import OurVission from "../components/OurVission";
import AboutUsFaq from "../components/AboutUsFaq";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";

function AboutUsPage() {
  return (
    <Box component="div">
      <Grid container>
        <AboutusDetail />
        <AboutOtasTeam />
        <OurValue />
        <OurMission />
        <OurVission />
        <AboutUsFaq />
        {/* <ConnectWithus /> */}
        <Grid
          container
          sx={{
            marginTop: "100px",
            backgroundColor: "#fff",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsPage;
