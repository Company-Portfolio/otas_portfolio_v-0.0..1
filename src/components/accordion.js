import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import questionMark from "./../assets/img/ni-question.png";
import left from "./../assets/img/Punctuation4.svg";
import right from "./../assets/img/Punctuation8.svg";
import { Grid } from "@mui/material";
import "./../style/homepage.css";

export default function Accordions() {
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
             What does OTAS Tech Solution specialize in?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            OTAS Tech Solution is a comprehensive technology solutions provider,
            offering services such as software development, app development and
            IT consulting.
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
             What does OTAS Tech Solution specialize in?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            OTAS Tech Solution is a comprehensive technology solutions provider,
            offering services such as software development, app development and
            IT consulting.
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
             What does OTAS Tech Solution specialize in?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            OTAS Tech Solution is a comprehensive technology solutions provider,
            offering services such as software development, app development and
            IT consulting.
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
             How can OTAS Tech Solution help my business?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            We tailor our tech solution to meet your business needs, enhancing
            efficiency, productivity, and security. Whether you need custom
            software, IT infrastructure support, or strategic consulting, we’ve
            got you covered.
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
             What industries does OTAS Tech Solution serve?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            We cater to a diverse range of industries, including company
            portfolio websites, healthcare, e-commerce, education, and more. Our
            adaptable solutions are designed to meet the unique challenges of
            various business sectors.
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
             Is OTAS Tech Solution open to partnerships or collaborations?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Yes, we value partnerships and collaborations. Whether you’re a
            fellow tech company, a startup, or an established business looking
            for innovative solutions, we’re open to exploring collaborative
            opportunities.
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
             How can I get in touch with OTAS Tech Solution for more
            information?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            You can contact us through our website, email, or phone. Visit our
            ‘Contact Us’ page for details on reaching out to our team. We’re
            always ready to discuss how OTAS Tech Solution can elevate your
            technology landscape.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
