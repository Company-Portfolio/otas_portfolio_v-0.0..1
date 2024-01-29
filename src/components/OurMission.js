import { Grid } from "@mui/material";
import React from "react";

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
