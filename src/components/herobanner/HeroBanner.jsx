import { Box } from "@mui/material";
import React from "react";

import "./herobanner.css";

function HeroBanner() {
  return (
    <Box className="bannerContainer" id="heroBanner">
      <Box className="backgroundImage"></Box>
      <Box className="bannerText">
        <h1>
          We Create <span className="darkblue">Digital Products</span> <br />
          For <span className="lightblue">Your Bussiness</span>
        </h1>
        <p className="bannerDescription">
          With a client-focused approach, our seasoned team ensures <br /> each
          product aligns perfectly with your goals. Let’s collaborate <br /> and
          elevate your business into the digital forefront.
        </p>
        <a href="https://www.facebook.com/messages/t/121899224338902">
          Contact Us
        </a>
      </Box>
    </Box>
  );
}

export default HeroBanner;
