import React from "react";
import underline from "./../assets/img/Underline.svg";
import { Grid } from "@mui/material";

function HeroBanner() {
  return (
    <Grid
      item
      xs={12}
      className="headerContainer"
      sx={{
        paddingY: "50px",
        marginTop: "50px",
      }}
    >
      <p className="header text">
        We <span style={{ color: "#75ABFE" }}>Create</span> Digital <br />{" "}
        Product For <br />
        <span style={{ color: "#75ABFE" }}>Your Business</span>
      </p>
      <Grid sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={underline} alt="underline" />
      </Grid>
    </Grid>
  );
}

export default HeroBanner;
