import { Grid } from "@mui/material";
import React from "react";
import vision from "./../assets/img/vission.png";

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
        <img src={vision} alt="card" className="ourValueIcon" />
        <p className="text">Our Vision</p>
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
