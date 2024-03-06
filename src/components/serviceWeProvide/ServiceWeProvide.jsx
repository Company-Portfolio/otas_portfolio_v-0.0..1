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
        Our expertise lies in developing robust platforms tailored to your
        needs, ensuring seamless operations and digital growth for your
        business. Whether you need powerful websites, or tailored software,
        innovative apps, we craft solutions to amplify your success. With a
        client-focused approach, our seasoned team ensures each product aligns
        perfectly with your goals.
      </p>
      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Web Development</span>
            <p>
              Our approach blends intuitive design with seamless functionality,
              creating websites that not only captivate but also drive
              engagement and conversions, from concept to execution, we
              prioritize user experience to ensure your online presence stands
              out in today’s competitive landscape. Elevate your online identity
              with our personalized approach to web development.
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
              Our focus on personalized strategies ensures your app aligns
              perfectly with your vision and goals. With a commitment to
              seamless functionality and engaging interfaces, we craft apps that
              not only meet your needs but exceed expectations, delivering
              impactful results for your business. From concept to launch, our
              team ensures your app stands out in today’s ever-evolving mobile
              landscape.
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
              Our focus on personalized strategies ensures your app aligns
              perfectly with your vision and goals. With a commitment to
              seamless functionality and engaging interfaces, we craft apps that
              not only meet your needs but exceed expectations, delivering
              impactful results for your business. From concept to launch, our
              team ensures your app stands out in today’s ever-evolving mobile
              landscape.
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
