import { Box, Grid } from "@mui/material";
import React from "react";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";
import WebService from "../components/WebService";
import WebPackage from "../components/WebPackage";
import "./../style/services.css";
import WebFaq from "../components/WebFaq";

function WebServicePage() {
  return (
    <Box component="div">
      <Grid container>
        <WebService />
        <WebPackage />
        <WebFaq />
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

export default WebServicePage;
