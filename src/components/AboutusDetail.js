import React from "react";
import { Grid } from "@mui/material";
import picture1 from "./../assets/img/picture1.jpg";

function AboutusDetail() {
  return (
    <Grid
      container
      className="subHeaderContainer"
      sx={{ marginLeft: { xs: "20px", md: "100px" }, marginY: "100px" }}
    >
      <Grid item xs={12} md={5} className="subHeader">
        <p className="text">Where Innovation Meets Ingenuity</p>
        <span className="text">
          OTAS Co.,Ltd. was established in 2021. We started as a group of fresh
          graduate and self-taught programmers but managed to build a team that
          is now powerful enough to develop effective and efficient IT products
          and provide client-tailored services. We have completed a number of
          both outsourced and in-house projects during the past 2 years. Big and
          Small. Easy and Complex. We are never afraid to fail if this will lead
          us to learn something new and expand our professional and personal
          horizons.
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
          // padding: "0px",
        }}
      >
        <div>
          <img src={picture1} alt="card" className="picture" />
        </div>
      </Grid>
    </Grid>
  );
}

export default AboutusDetail;
