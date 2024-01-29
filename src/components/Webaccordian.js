import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import questionMark from "./../assets/img/ni-question.png";
import left from "./../assets/img/Punctuation4.svg";
import right from "./../assets/img/Punctuation8.svg";

import "./../style/homepage.css";
import { Grid } from "@mui/material";

export default function WebAccordian() {
  return (
    <div>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
            What types of mobile apps does your company develop?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            We specialize in developing a wide range of mobile apps, including
            iOS and Android applications, cross-platform solutions, and native
            apps tailored to specific business needs.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
            What technologies do you use for app development?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Our tech stack includes industry-leading technologies and frameworks
            such as React Native, Flutter, Swift, and Kotlin. We choose the
            technology based on project requirements and client preferences.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
            Do you provide post-launch support for mobile apps?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Yes, we offer post-launch support and maintenance packages. Our team
            is available for updates, bug fixes, and enhancements to ensure your
            app continues to meet evolving needs.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
             Do you provide ongoing support and maintenance after the website is
            live?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Yes, we offer post-launch support and maintenance packages. Our goal
            is to ensure your website continues to operate smoothly, and we’re
            available for updates, enhancements, and troubleshooting.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
             Can you integrate third-party services or APIs into mobile apps?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Certainly. We have experience integrating various third-party
            services and APIs, enhancing app functionality. Whether it’s payment
            gateways, social media integrations, or other services, we ensure
            seamless compatibility.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginY: "10px" }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordianHeaderContainer"
          sx={{
            backgroundColor: "#7ba2fe",
          }}
        >
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <img src={questionMark} alt="questionMark" />
          </Grid>
          <span className="accordianHeader">
             What sets your app development services apart from others?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Our commitment to user-centric design, innovation, and a
            collaborative development approach distinguishes us. We prioritize
            client satisfaction, ensuring the final app delivers an exceptional
            user experience.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
