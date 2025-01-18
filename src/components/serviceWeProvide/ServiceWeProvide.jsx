import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion components
import web from "./../../assets/image/web.png";
import app from "./../../assets/image/app.png";
import custom from "./../../assets/image/custom.png";
import game from "./../../assets/image/game.png";
import iot from "./../../assets/image/iot.png";
import ui from "./../../assets/image/uiux.png";
import out from "./../../assets/image/outsource.png";
import "./serviceweprovide.css";

function ServiceWeProvide() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect(); // Corrected method name
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 30 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <Box className="serviceContainer" id="Services" ref={ref}>
      <motion.h1
        className="serviceHeader"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Services We Provide
      </motion.h1>
      <motion.p
        className="serviceContent"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We specialize in creating powerful digital solutions to meet your
        specific needs. Our services are designed to streamline your operations
        and fuel your business's digital growth.
      </motion.p>

      {/** Service Sections */}
      {[
        {
          title: "Web Development",
          description:
            "Build stunning, responsive websites that drive engagement and growth. Our expert team crafts high-performance sites tailored to your business needs.",
          image: web,
        },
        {
          title: "App Development",
          description:
            "Create top-notch mobile apps for Android and iOS. We deliver feature-rich, user-friendly apps that ensure a seamless experience across all devices.",
          image: app,
        },
        {
          title: "Customize Software",
          description:
            "Get bespoke software solutions designed to fit your unique business requirements. We develop secure, scalable, and flexible applications that grow with you.",
          image: custom,
        },
        {
          title: "Game Development",
          description:
            "Bring your game ideas to life with our immersive and engaging game development services. We create high-quality games for various platforms that captivate players.",
          image: game,
        },
        {
          title: "IoT (Internet of Things) Development",
          description:
            "Transform your business with smart, connected IoT solutions. We develop innovative IoT hardware prototypes and software systems that optimize operations and provide real-time insights.",
          image: iot,
        },
        {
          title: "UI/UX Design Development",
          description:
            "Enhance user satisfaction with our intuitive and visually appealing UI/UX designs. We ensure your applications and websites are both functional and delightful to use.",
          image: ui,
        },
        {
          title: "Outsourced Development Team",
          description:
            "Access a dedicated team of skilled developers without the overhead. Our outsourced team integrates seamlessly with your projects, ensuring timely and high-quality delivery.",
          image: out,
        },
      ].map((service, index) => (
        <motion.div
          className="serviceBox"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
        >
          <Grid container>
            <Grid item xs={12} md={8}>
              <motion.span className="serviceTitle">
                {service.title}
              </motion.span>
              <motion.p className="serviceDescription">
                {service.description}
              </motion.p>
            </Grid>
            <Grid item xs={12} md={4} className="serviceImage">
              <motion.img src={service.image} alt={service.title} />
            </Grid>
            <Grid item xs={12}>
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
          </Grid>
        </motion.div>
      ))}
    </Box>
  );
}

export default ServiceWeProvide;
