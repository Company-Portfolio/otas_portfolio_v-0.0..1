import { Grid } from "@mui/material";
import React from "react";

function OurVission() {
  return (
    <Grid
      container
      sx={{
        marginX: { xs: "0", md: "10px" },
        marginY: "50px",
      }}
    >
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: { xs: 0, md: "50px" } }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
        >
          <path
            d="M26.0417 109.375C23.1771 109.375 20.7248 108.355 18.6849 106.315C16.645 104.275 15.625 101.823 15.625 98.9583V26.0417C15.625 23.1771 16.645 20.7248 18.6849 18.6849C20.7248 16.645 23.1771 15.625 26.0417 15.625H98.9583C101.823 15.625 104.275 16.645 106.315 18.6849C108.355 20.7248 109.375 23.1771 109.375 26.0417V98.9583C109.375 101.823 108.355 104.275 106.315 106.315C104.275 108.355 101.823 109.375 98.9583 109.375H26.0417ZM26.0417 98.9583H98.9583V26.0417H26.0417V98.9583ZM31.25 88.5417H93.75L74.2187 62.5L58.5938 83.3333L46.875 67.7083L31.25 88.5417Z"
            fill="#ECECEC"
          />
        </svg>
        <p className="text">Our Vission</p>
      </Grid>
      <Grid item xs={6}>
        <div className="ourMissionCard">
          <p>
            1.Pioneering a Digital Revolution: to be pioneers in the digital
            landscape, leading a revolution that transforms industries and
            redefines the way businesses operate and connect with their
            audiences.
          </p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="ourMissionCard">
          <p>
            2. Pioneering a Digital Revolution: to be pioneers in the digital
            landscape, leading a revolution that transforms industries and
            redefines the way businesses operate and connect with their
            audiences.
          </p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="ourMissionCard">
          <p>
            3. Fostering a Culture of Continuous Innovation: to foster a culture
            of continuous innovation. We see ourselves as a hub for creativity
            and forward thinking, where every solution crafted today paves the
            way for more innovation tomorrow.
          </p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="ourMissionCard">
          <p>
            4. Leading with Purpose and Integrity: to lead with purpose and
            integrity. We aim to set the standard for ethical and responsible
            business practices, becoming a trusted partner for our clients and a
            beacon of integrity in the tech industry
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default OurVission;
