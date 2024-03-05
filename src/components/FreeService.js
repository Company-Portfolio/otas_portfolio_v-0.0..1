import { Grid } from "@mui/material";
import React from "react";
import freelarge from "./../assets/img/freelarge.png";

function FreeService() {
  return (
    <Grid
      container
      className="subHeaderContainer"
      sx={{
        marginLeft: { xs: "20px", md: "100px" },
        marginTop: { xs: "70px", md: "200px" },
        marginBottom: { xs: "0", md: "200px" },
      }}
    >
      <Grid item xs={12} md={5} className="subHeader">
        <p className="text">Free Consulting Service</p>
        <span className="text">
          Our free consultations delve deep into your business goals, providing
          customized strategies and actionable advice to help you navigate
          challenges and seize opportunities
        </span>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="serviceimgContainer">
          <img src={freelarge} alt="web" />
        </div>
      </Grid>
    </Grid>
  );
}

export default FreeService;
