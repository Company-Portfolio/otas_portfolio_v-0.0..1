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
              Is the free consultation really free?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as software development, app
              development and IT consulting.
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
              How Can OTAS Tech Solution help my business?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as software development, app
              development and IT consulting.
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
              What Industries Does OTAS Tech Solution Serve?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as software development, app
              development and IT consulting.
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
              Is OTAS Tech Solution Open To Partnerships Or Collaborations?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as software development, app
              development and IT consulting.
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
              How Can I Get In Touch With OTAS Tech Solution For More
              Information?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <p className="accordiantext">
              OTAS Tech Solution is a comprehensive technology solutions
              provider, offering services such as software development, app
              development and IT consulting.
            </p>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default AboutAccordian;
