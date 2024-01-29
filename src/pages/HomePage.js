import { Box, Grid } from "@mui/material";
import React from "react";

import "./../style/homepage.css";
import Footer from "../components/Footer";
import HowBuildProduct from "../components/howBuildProduct";
import HeroBanner from "../components/HeroBanner";
import Whatit from "../components/Whatit";
import ServiceWeOffer from "../components/ServiceWeOffer";
import FaqSection from "../components/FaqSection";
import ConnectWithus from "../components/ConnectWithus";

function HomePage() {
  return (
    <>
      <Box component="div">
        <Grid container>
          <HeroBanner />
          {/* -------------------------------------------------------------------------------_ */}
          <Whatit />
          {/* --------------------------------------------------------------------------------- */}
          <ServiceWeOffer />
          {/* --------------------------------------------------------------------------------- */}
          <HowBuildProduct />
          {/* --------------------------------------------------------------------------------- */}
          <FaqSection />
          {/* --------------------------------------------------------------------------------- */}
          {/* <ConnectWithus /> */}
          {/* --------------------------------------------------------------------------------- */}
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
    </>
  );
}

export default HomePage;
