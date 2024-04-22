import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import questionMark from "./../assets/img/ni-question.png";
// import left from "./../assets/img/Punctuation4.svg";
// import right from "./../assets/img/Punctuation8.svg";
import { Grid } from "@mui/material";
import "./accordian.css";

function AboutAccordian() {
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} md={8} sx={{ marginY: "20px" }}>
        <Accordion sx={{ borderRadius: "15px", overflow: "hidden" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={{ color: "#fff" }} />}
            sx={{ backgroundColor: "#007fff" }}
          >
            <span className="accordianHeader">
              What does OTAS Tech Solution specialize in
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as Web development,Software
              development,App development and IT consulting.
            </p>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} md={8} sx={{ marginY: "20px" }}>
        <Accordion sx={{ borderRadius: "15px", overflow: "hidden" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={{ color: "#fff" }} />}
            sx={{ backgroundColor: "#007fff" }}
          >
            <span className="accordianHeader">
              How can OTAS Tech Solution help your business
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              We tailor our tech solution to meet your business needs, enhancing
              efficiency, productivity, and security. Whether you need custom
              software, IT infrastructure support, or strategic consulting,
              we’ve got you covered.
            </p>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} md={8} sx={{ marginY: "20px" }}>
        <Accordion sx={{ borderRadius: "15px", overflow: "hidden" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={{ color: "#fff" }} />}
            sx={{ backgroundColor: "#007fff" }}
          >
            <span className="accordianHeader">
              Is OTAS Tech Solution open to partnerships or collaborations?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              Yes, we value partnerships and collaborations. Whether you’re a
              fellow tech company, a startup, or an established business looking
              for innovative solutions, we’re open to exploring collaborative
              opportunities.
            </p>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default AboutAccordian;
