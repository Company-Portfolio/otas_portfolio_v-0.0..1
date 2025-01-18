import React, { useEffect, useRef } from "react";
import "./faqsection.css";
import { Box } from "@mui/material";
import AboutAccordian from "./accordian/accordian";
import { motion, useAnimation } from "framer-motion"; // Importing Framer Motion components

function FaqSection() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <Box className="faqContainer" id="FAQ" ref={ref}>
      <motion.h1
        className="faqHeader"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Unlock Your Tech Potential: FAQs
      </motion.h1>
      <motion.p
        className="faqText"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to our FAQ section, where we address common queries to provide
        you with clear insights into our services. Explore answers to frequently
        asked questions about our web development process, technologies,
        timelines, and more. If you have additional questions, feel free to
        reach out to our team for personalized assistance.
      </motion.p>
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AboutAccordian />
        </motion.div>
      </Box>
    </Box>
  );
}

export default FaqSection;
