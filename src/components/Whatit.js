import React from "react";
import { Button, Grid } from "@mui/material";
import sprinkle from "./../assets/img/Sprinkle.png";

function Whatit() {
  return (
    <Grid
      container
      className="subHeaderContainer"
      sx={{
        marginLeft: { xs: "20px", md: "100px" },
        marginTop: { xs: "20px", md: "150px" },
        marginBottom: { xs: "100px", md: "150px" },
      }}
    >
      <Grid item xs={12} md={7} className="subHeader">
        <p className="text">What is OTAS</p>
        <span className="text">
          Transforming businesses through be spoke digital solutions is our
          expertise at OTAS Tech Solution. Whether you need powerful websites,
          or tailored software, innovative apps, we craft solutions to amplify
          your success. With a client-focused approach, our seasoned team
          ensures each product aligns perfectly with your goals. Let’s
          collaborate and elevate your business into the digital forefront.
        </span>
        <Button variant="contained" className="connectbtn">
          <a href="https://www.facebook.com/otastechsolution">
            Connect With Us
          </a>
        </Button>
      </Grid>
      <Grid sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={sprinkle} alt="sprinkle" className="sprinkle" />
      </Grid>
    </Grid>
  );
}

export default Whatit;
