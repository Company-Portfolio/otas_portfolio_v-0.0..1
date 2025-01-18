import { Box } from "@mui/material";
import { delay, motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";

import "./herobanner.css";

function HeroBanner() {
  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: 30 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 30 }, // Hidden state
  //   visible: { opacity: 1, y: 0 }, // Visible state
  //   transition: { delay: 10 },
  // };

  return (
    <Box className="bannerContainer" id="heroBanner">
      <Box className="backgroundImage"></Box>
      <Box className="bannerText">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          We Create <span className="darkblue">Digital Products</span> <br />
          For <span className="lightblue">Your Bussiness</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }} // Image enters with a slight slide up
          animate={{ opacity: 1, x: 0 }} // Final state
          exit={{ opacity: 0, x: 200 }} // Exit animation
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }} // Transition duration
          className="bannerDescription"
        >
          With a client-focused approach, our seasoned team ensures <br />
          each product aligns perfectly with your goals. Let’s collaborate{" "}
          <br />
          and elevate your business into the digital forefront.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://www.facebook.com/messages/t/121899224338902">
            Contact Us
          </a>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HeroBanner;
