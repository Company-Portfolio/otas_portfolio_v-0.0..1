import React from "react";
import { Box, Grid } from "@mui/material";
import email from "./../../assets/image/email.png";
import facebook from "./../../assets/image/facebook.png";
import instagram from "./../../assets/image/instagram.png";

import "./footer.css";

function Footer() {
  return (
    <Box className="footerContainer" id="Contact">
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} className="footerText">
          <h1>Let's Talk</h1>
          <p>
            We invite you into our iterative and collaborative process, working
            hand in hand to shape ideas, refine concepts, and craft tailor-made
            solutions that precisely align with your vision and business goals.
          </p>
          <Box className="contactInfo">
            <a href="tel:09754007485" className="phone">
              09 75 4007 485
            </a>
            <a href="mailto:info@otastechsolutions.com" className="email">
              <img src={email} alt="email" className="icon" />
            </a>
          </Box>

          <Box className="contactInfo">
            <h1 style={{ margin: "0", marginRight: "100px" }}>Follow Us</h1>
            <div style={{ display: "flex" }}>
              <a
                href="https://www.facebook.com/otastechsolution"
                className="email"
              >
                <img src={facebook} alt="email" className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/otas-tech-solution/"
                className="email"
              >
                <img src={instagram} alt="email" className="icon" />
              </a>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="footerMap">
            <iframe
              title="otas-tech-solution"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.7488782998616!2d96.11407937354257!3d16.838809583957836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194dbc0d307ed%3A0x8f193188cf177deb!2sAye%20Yeik%20Mon%204th%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1709740868892!5m2!1sen!2smm"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
