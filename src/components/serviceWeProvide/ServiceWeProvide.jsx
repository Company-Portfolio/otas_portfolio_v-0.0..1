import { Box, Grid } from "@mui/material";
import React from "react";
import web from "./../../assets/image/web.png";
import app from "./../../assets/image/app.png";
import custom from "./../../assets/image/custom.png";

import "./serviceweprovide.css";

function ServiceWeProvide() {
  return (
    <Box className="serviceContainer" id="Services">
      <h1 className="serviceHeader">Services We Provide</h1>
      <p className="serviceContent">
        We specialize in creating powerful digital solutions to meet your
        specific needs. Our services are designed to streamline your operations
        and fuel your business's digital growth.
      </p>
      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Web Development</span>
            <p>
              We create user-friendly and functional websites that capture
              attention, drive user engagement, and increase conversions. Our
              focus is on user experience to ensure your online presence thrives
              in today's competitive market. We offer a personalized approach to
              web development to elevate your online identity.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={web} alt="web" />
          </Grid>
        </Grid>
      </Box>
      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>App Development</span>
            <p>
              Bring your app idea to life. We build custom mobile apps that
              perfectly match your vision and goals.  Our focus is on creating
              user-friendly interfaces and smooth functionality to deliver
              impactful results for your business. We collaborate closely with
              you throughout the entire process, from the initial concept to
              launch, ensuring your app thrives in the ever-evolving mobile
              market.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={app} alt="web" />
          </Grid>
        </Grid>
      </Box>
      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Customize Software</span>
            <p>
              Our free consultations delve deep into your business goals,
              providing customized strategies and actionable advice to help you
              navigate challenges and seize opportunities
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={custom} alt="web" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ServiceWeProvide;
