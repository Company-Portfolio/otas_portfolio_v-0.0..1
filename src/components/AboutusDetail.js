import React from "react";
import { Grid } from "@mui/material";

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
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path
            d="M50 210C44.5 210 39.7917 208.042 35.875 204.125C31.9583 200.208 30 195.5 30 190V50C30 44.5 31.9583 39.7917 35.875 35.875C39.7917 31.9583 44.5 30 50 30H190C195.5 30 200.208 31.9583 204.125 35.875C208.042 39.7917 210 44.5 210 50V190C210 195.5 208.042 200.208 204.125 204.125C200.208 208.042 195.5 210 190 210H50ZM50 190H190V50H50V190ZM60 170H180L142.5 120L112.5 160L90 130L60 170Z"
            fill="black"
          />
        </svg>
      </Grid>
    </Grid>
  );
}

export default AboutusDetail;
