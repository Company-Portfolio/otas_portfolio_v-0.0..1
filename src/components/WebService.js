import { Grid } from "@mui/material";
import React from "react";
import weblarge from "./../assets/img/weblarge.png";

function WebService() {
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
        <p className="text">Web Development Service</p>
        <span className="text">
          Our approach blends intuitive design with seamless functionality,
          creating websites that not only captivate but also drive engagement
          and conversions, from concept to execution, we prioritize user
          experience to ensure your online presence stands out in today’s
          competitive landscape. Elevate your online identity with our
          personalized approach to web development.
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
          <img src={weblarge} alt="web" />
        </div>
      </Grid>
    </Grid>
  );
}

export default WebService;
