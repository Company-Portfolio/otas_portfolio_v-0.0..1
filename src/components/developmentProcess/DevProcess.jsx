import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing Framer Motion components
import dev1 from "./../../assets/image/dev1.png";
import dev2 from "./../../assets/image/dev2.png";
import dev3 from "./../../assets/image/dev3.png";
import dev4 from "./../../assets/image/dev4.png";
import dev5 from "./../../assets/image/dev5.png";
import "./devProcess.css";

function DevProcess() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect();
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
    <Box className="devContainer" id="Development Process" ref={ref}>
      <motion.h1
        className="devHeader"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Our Development Process
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our product development process ensures precision and quality, leading
        to a seamless transfer of superior products for your business.
      </motion.p>

      <Box sx={{ padding: { xs: "30px", lg: "50px 135px" } }}>
        {[
          // Mapping through the processes for brevity and animation
          {
            title: "Process 1",
            description:
              "We delve deep into understanding your needs, market trends, and user insights to lay a robust foundation for the development process.",
            image: dev5,
          },
          {
            title: "Process 2",
            description:
              "We meticulously craft intuitive and innovative designs that align with your vision and user needs, ensuring the foundation for a compelling product.",
            image: dev4,
          },
          {
            title: "Process 3",
            description:
              "Our dedicated team members cutting-edge technologies and precise engineering to transform designs into functional, high-quality products, ensuring robustness and scalability at every step.",
            image: dev3,
          },
          {
            title: "Process 4",
            description:
              "We employ meticulous evaluations to guarantee flawless functionality, reliability, and optimal performance, ensuring that every product meets the highest standards before deployment.",
            image: dev2,
          },
          {
            title: "Process 5",
            description:
              "With precision and care, we ensure the smooth transition of the finished product, ready to empower your business operations with its innovative capabilities.",
            image: dev1,
          },
        ].map((process, index) => (
          <Grid container key={index}>
            <Grid item xs={12} md={3} lg={2} className="devImage">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {process.title}
              </motion.h3>
              <p>
                <motion.img
                  src={process.image}
                  alt={process.title.toLowerCase()}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                />
                {process.title === "Process 1"
                  ? " Research"
                  : process.title === "Process 2"
                  ? " Design"
                  : process.title === "Process 3"
                  ? " Develop"
                  : process.title === "Process 4"
                  ? " Testing"
                  : " Deliver"}
              </p>
            </Grid>
            <Grid item xs={12} md={9} lg={10} className="devContent">
              <Box
                className="line"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <div className="circle"></div>
                <div className="stick"></div>
              </Box>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {process.description}
              </motion.p>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default DevProcess;
