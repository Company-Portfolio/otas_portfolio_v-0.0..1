import React from "react";

import "./faqsection.css";
import { Box } from "@mui/material";
import AboutAccordian from "./accordian/accordian";

function FaqSection() {
  return (
    <Box className="faqContainer" id="FAQ">
      <h1 className="faqHeader">Unlock Your Tech Potential: FAQs</h1>
      <p className="faqText">
        Welcome to our FAQ section, where we address common queries to provide
        you with clear insights into our services. Explore answers to frequently
        asked questions about our web development process, technologies,
        timelines, and more. If you have additional questions, feel free to
        reach out to our team for personalized assistance.
      </p>
      <Box>
        <AboutAccordian />
      </Box>
    </Box>
  );
}

export default FaqSection;
