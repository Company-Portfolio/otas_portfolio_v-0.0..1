import { Box, Button, Grid } from "@mui/material";
import React from "react";
import web from "./../../assets/image/web.png";
import app from "./../../assets/image/app.png";
import custom from "./../../assets/image/custom.png";
import game from "./../../assets/image/game.png";
import iot from "./../../assets/image/iot.png";
import ui from "./../../assets/image/uiux.png";
import out from "./../../assets/image/outsource.png";
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
              Build stunning, responsive websites that drive engagement and
              growth. Our expert team crafts high-performance sites tailored to
              your business needs.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={web} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            className="explore"
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>App Development</span>
            <p>
              Create top-notch mobile apps for Android and iOS. We deliver
              feature-rich, user-friendly apps that ensure a seamless experience
              across all devices.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={app} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Customize Software</span>
            <p>
              Get bespoke software solutions designed to fit your unique
              business requirements. We develop secure, scalable, and flexible
              applications that grow with you.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={custom} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Game Development</span>
            <p>
              Bring your game ideas to life with our immersive and engaging game
              development services. We create high-quality games for various
              platforms that captivate players.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={game} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>IoT (Internet of Things) Development</span>
            <p>
              Transform your business with smart, connected IoT solutions. We
              develop innovative IoT hardware prototypes and software systems
              that optimize operations and provide real-time insights.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={iot} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>UI/UX Design Development</span>
            <p>
              Enhance user satisfaction with our intuitive and visually
              appealing UI/UX designs. We ensure your applications and websites
              are both functional and delightful to use.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={ui} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>

      <Box className="serviceBox">
        <Grid container>
          <Grid item xs={12} md={8}>
            <span>Outsourced Development Team</span>
            <p>
              Access a dedicated team of skilled developers without the
              overhead. Our outsourced team integrates seamlessly with your
              projects, ensuring timely and high-quality delivery.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className="serviceImage">
            <img src={out} alt="web" />
          </Grid>
          <Button
            sx={{
              width: { xs: "100%", md: "35%", lg: "25%" },
              marginTop: "20px",
            }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSefs8N0MdmrffC2_4_VutnpVIh46dUXnXImlPnrfmA9RlTB3Q/viewform"
            target="_blank"
            className="explore"
          >
            Explore Now
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default ServiceWeProvide;
