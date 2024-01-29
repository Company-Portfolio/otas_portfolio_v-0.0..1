import { Box, Grid } from "@mui/material";
import React from "react";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";
import AppService from "../components/AppService";
import AppPackage from "../components/AppPackage";
import AppFaq from "../components/AppFaq";
import "./../style/services.css";

function AppServicePage() {
  return (
    <Box component="div">
      <Grid container>
        <AppService />
        <AppPackage />
        <AppFaq />
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

export default AppServicePage;
