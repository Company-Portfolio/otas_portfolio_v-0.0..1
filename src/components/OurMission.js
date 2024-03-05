import { Grid } from "@mui/material";
import React from "react";
import mission from "./../assets/img/mission.png";

function OurMission() {
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
        <img src={mission} alt="card" className="ourValueIcon" />
        <p className="text">Our Mission</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            1. Empower through Innovation: to empower businesses through
            innovative solutions. We strive to break new ground, leveraging
            cutting-edge technologies to propel our clients towards success and
            transformation.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            2. Transforming Ideas into Impact: to transform ideas into impact.
            We’re dedicated to providing creative and strategic solutions that
            not only meet but exceed the expectations of our clients, fostering
            growth and success.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            3. Building a Digital Future: to build a digital future where
            businesses thrive. We are committed to delivering exceptional
            digital experiences, embracing challenges, and pushing boundaries to
            shape a future where technology enhances every aspect of our
            clients’ operations.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            4. Enabling Growth, Inspiring Change: to enable the growth of
            businesses while inspiring positive change. Through our customized
            solutions and client-centric approach, we aim to be the catalyst for
            success in a rapidly evolving digital landscape.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            5. Empathy in Every Solution: to infuse empathy into every solution
            we create. We believe in understanding the unique challenges of our
            clients and developing thoughtful, impactful strategies that
            resonate with their goals and values.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="ourMissionCard">
          <p>
            6. Innovate with Integrity: Innovation with integrity is at the
            heart of our mission. We are committed to delivering pioneering
            solutions that not only meet the highest standards of quality but
            also uphold the trust and integrity placed in us by our clients.
          </p>
        </div>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <div className="ourMissionCard">
            <p>
              7. Crafting Tomorrow’s Success Stories: to craft tomorrow’s
              success stories. By combining creativity, expertise, and a
              relentless pursuit of excellence, we strive to be the driving
              force behind the achievements of our clients, today and into the
              future.
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurMission;
