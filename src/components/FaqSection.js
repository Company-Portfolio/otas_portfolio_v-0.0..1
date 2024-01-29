import { Grid } from "@mui/material";
import React from "react";
import Accordions from "../components/accordion";

function FaqSection() {
  return (
    <Grid
      container
      sx={{ marginTop: "100px", marginX: { xs: "10px", md: "0" } }}
    >
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: "100px" }}
      >
        <p className="text">Frequently Asked Questions</p>
        <span className="text">
          Welcome to our FAQ section, where we address
          <br />
          common queries to provide you with clear
          <br />
          insights into our services. Explore answers to
          <br />
          frequently asked questions about our web
          <br />
          development process, technologies, timelines,
          <br />
          and more. If you have additional questions, feel
          <br />
          free to reach out to our team for personalized
          <br />
          assistance.
        </span>
      </Grid>
      <Grid item xs={12} md={8} sx={{ margin: "auto" }}>
        <Accordions />
      </Grid>
    </Grid>
  );
}

export default FaqSection;
