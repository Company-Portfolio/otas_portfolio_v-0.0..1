import React from "react";
import Grid from "@mui/material/Grid";
import logo from "./../assets/img/logo.png";
import facebook from "./../assets/img/fb.png";
import linkedin from "./../assets/img/linkedin.png";
import telegram from "./../assets/img/telegram.png";

import "./../style/footer.css";

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginX: { xs: "10px", md: "100px" }, paddingBottom: "40px" }}
    >
      <Grid item xs={12} md={6} sx={{ paddingRight: "40px" }}>
        <div>
          <img src={logo} alt="logo" className="footerLogo" />
        </div>
        <div>
          <p className="footerText">
            Whether you need powerful websites, or tailored software, innovative
            apps, we craft solutions to amplify your success. With a
            client-focused approach, our seasoned team ensures each product
            aligns perfectly with your goals. Let’s collaborate and elevate your
            business into the digital forefront
          </p>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          display: "flex",
          justifyContent: { xs: "none", md: "center" },
          alignItems: { xs: "none", md: "center" },
        }}
      >
        <div className="footerservice">
          <p>Services</p>

          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Free Consulting</li>
          </ul>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "none", md: "center" },
          marginBottom: { xs: "0", md: "40px" },
        }}
      >
        <div className="footerservice">
          <p>Follow Us For Updates</p>
          <div className="socialmediaicons">
            <a href="https://www.facebook.com/otastechsolution">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/otas-tech-solution/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
