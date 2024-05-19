import { Box, Grid } from "@mui/material";
import React from "react";
import dev1 from "./../../assets/image/dev1.png";
import dev2 from "./../../assets/image/dev2.png";
import dev3 from "./../../assets/image/dev3.png";
import dev4 from "./../../assets/image/dev4.png";
import dev5 from "./../../assets/image/dev5.png";
import "./devProcess.css";

function DevProcess() {
  return (
    <Box className="devContainer" id="Development Process">
      <h1 className="devHeader">Our Development Process</h1>
      <p>
        Our product development process ensures precision and quality, leading
        to a seamless transfer of superior products for your business.
      </p>
      <Box sx={{ padding: { xs: "30px", lg: "50px 135px" } }}>
        <Grid container>
          <Grid item xs={12} md={3} lg={2} className="devImage">
            <h3>Process 1</h3>
            <p>
              <img src={dev5} alt="web" />
              Research
            </p>
          </Grid>
          <Grid item xs={12} md={9} lg={10} className="devContent">
            <Box className="line" sx={{ display: { xs: "none", md: "flex" } }}>
              <div className="circle"></div>
              <div className="stick"></div>
            </Box>

            <p>
              We delve deep into understanding your needs, market trends, and
              user insights to lay a robust foundation for the development
              process.
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3} lg={2} className="devImage">
            <h3>Process 2</h3>
            <p>
              <img src={dev4} alt="web" /> Design
            </p>
          </Grid>
          <Grid item xs={12} md={9} lg={10} className="devContent">
            <Box className="line" sx={{ display: { xs: "none", md: "flex" } }}>
              <div className="circle"></div>
              <div className="stick"></div>
            </Box>

            <p>
              We meticulously craft intuitive and innovative designs that align
              with your vision and user needs, ensuring the foundation for a
              compelling product.
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3} lg={2} className="devImage">
            <h3>Process 3</h3>
            <p>
              <img src={dev3} alt="develop" />
              Develop
            </p>
          </Grid>
          <Grid item xs={12} md={9} lg={10} className="devContent">
            <Box className="line" sx={{ display: { xs: "none", md: "flex" } }}>
              <div className="circle"></div>
              <div className="stick"></div>
            </Box>

            <p>
              Our dedicated team members cutting-edge technologies and precise
              engineering to transform designs into functional, high-quality
              products, ensuring robustness and scalability at every step.
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3} lg={2} className="devImage">
            <h3>Process 4</h3>
            <p>
              <img src={dev2} alt="test" /> Testing
            </p>
          </Grid>
          <Grid item xs={12} md={9} lg={10} className="devContent">
            <Box className="line" sx={{ display: { xs: "none", md: "flex" } }}>
              <div className="circle"></div>
              <div className="stick"></div>
            </Box>

            <p>
              We employ meticulous evaluations to guarantee flawless
              functionality, reliability, and optimal performance, ensuring that
              every product meets the highest standards before deployment.
            </p>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={3} lg={2} className="devImage">
            <h3>Process 5</h3>
            <p>
              <img src={dev1} alt="deliver" /> Deliver
            </p>
          </Grid>
          <Grid item xs={12} md={9} lg={10} className="devContent">
            <Box className="line" sx={{ display: { xs: "none", md: "flex" } }}>
              <div className="circle"></div>
              <div className="stick"></div>
            </Box>

            <p>
              With precision and care, we ensure the smooth transition of the
              finished product, ready to empower your business operations with
              its innovative capabilities
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DevProcess;
