import { Grid } from "@mui/material";
import React from "react";
import applarge from "./../assets/img/applarge.png";

function AppService() {
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
      <Grid item xs={11} md={5} className="subHeader">
        <p className="text">App Development Service</p>
        <span className="text">
          Our focus on personalized strategies ensures your app aligns perfectly
          with your vision and goals. With a commitment to seamless
          functionality and engaging interfaces, we craft apps that not only
          meet your needs but exceed expectations, delivering impactful results
          for your business. From concept to launch, our team ensures your app
          stands out in today’s ever-evolving mobile landscape.
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
        <div className="app">
          <img src={applarge} alt="web" />
        </div>
      </Grid>
    </Grid>
  );
}

export default AppService;
