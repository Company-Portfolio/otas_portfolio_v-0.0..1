import React from "react";
import { Box, Grid } from "@mui/material";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";
import FreeService from "../components/FreeService";
import FreeFaq from "../components/FreeFaq";

function FreeConsulatingPage() {
  return (
    <Box component="div">
      <Grid container>
        <FreeService />
        <FreeFaq />
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

export default FreeConsulatingPage;
