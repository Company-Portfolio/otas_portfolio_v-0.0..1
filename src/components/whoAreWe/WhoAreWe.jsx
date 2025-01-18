import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion components
import whoarewe from "./../../assets/image/otasmember.jpeg";
import mission from "./../../assets/image/mission.png";
import vision from "./../../assets/image/vission.png";

import "./whoarewe.css";

function WhoAreWe() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0.95 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <Box
      className="whocontainer"
      id="Aboutus"
      ref={ref}
      // sx={{ padding: "20px" }}
    >
      <motion.h1
        className="whoheader"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        About Our Company
      </motion.h1>
      <Grid container spacing={2}>
        {/* Company Image Section */}
        <Grid item xs={12} md={12}>
          <Box
            className="whoimage"
            sx={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}
          >
            <motion.img
              src={whoarewe}
              alt="whoarewe"
              style={{ width: "100%" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            />
          </Box>
        </Grid>

        {/* Company Description */}
        <Grid item xs={12}>
          <motion.p
            className="whocontent"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            OTAS Co., Ltd. was established in 2021. We began as a group of fresh
            graduates, self-taught developers, and experienced professionals.
            Over the past 3 years, we have built a powerful team capable of
            developing effective and efficient IT products while providing
            client-tailored services. We have successfully completed a range of
            outsourced and in-house projects, both big and small, simple and
            complex. We embrace challenges and are never afraid to fail if it
            leads to learning something new and expanding our professional and
            personal horizons.
          </motion.p>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12} md={6} sx={{ marginTop: "50px" }}>
          <motion.h3
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={mission} alt="mission" />
            <span className="mission">Our Mission</span>
          </motion.h3>
          <motion.p
            className="whocontent"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empower through Innovation: to empower businesses through innovative
            solutions. We strive to break new ground, leveraging cutting-edge
            technologies to propel our clients towards success and
            transformation.
          </motion.p>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12} md={6} sx={{ marginTop: "50px" }}>
          <motion.h3
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={vision} alt="vision" />
            <span className="mission">Our Vision</span>
          </motion.h3>
          <motion.p
            className="whocontent"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Pioneering a Digital Revolution, to be pioneers in the digital
            landscape, leading a revolution that transforms industries and
            redefines the way businesses operate and connect with their
            audiences.
          </motion.p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhoAreWe;
