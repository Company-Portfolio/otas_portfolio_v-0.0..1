import React from "react";
import { Grid } from "@mui/material";
import FreeAccordian from "./FreeAccordian";

function FreeFaq() {
  return (
    <Grid
      container
      sx={{
        marginTop: "100px",
        marginX: { xs: "10px", md: "0" },
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: "100px" }}
      >
        <p className="text">Frequently Asked Questions</p>
        <span className="text">
          Welcome to our FAQ section, where we address common queries to provide
          you with clear insights into our services. Explore answers to
          frequently asked questions about our web development process,
          technologies, timelines, and more. If you have additional questions,
          feel free to reach out to our team for personalized assistance.
        </span>
      </Grid>
      <Grid item xs={12} md={7} sx={{ margin: "auto" }}>
        <FreeAccordian />
      </Grid>
    </Grid>
  );
}

export default FreeFaq;
