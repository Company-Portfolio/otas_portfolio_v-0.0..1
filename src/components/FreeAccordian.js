import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import questionMark from "./../assets/img/ni-question.png";
import left from "./../assets/img/Punctuation4.svg";
import right from "./../assets/img/Punctuation8.svg";
import { Grid } from "@mui/material";
import "./../style/homepage.css";

function FreeAccordian() {
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
            Is the free consultation really free?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Yes, absolutely! Our free consultation is a no-obligation
            opportunity for you to discuss your needs, explore potential
            solutions, and get to know us better.
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
            How long does the free consultation last?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            The duration of the free consultation depends on the complexity of
            your project and your specific questions. On average, the
            consultation ranges from 30 minutes to an hour.
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
            Can I bring my team to the free consultation?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            Absolutely! We encourage team participation, especially if multiple
            stakeholders are involved in the decision-making process. Please
            provide us with the names and the roles of attendees when
            scheduling.
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
              What happens after the free consultation?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            After free consultation, we’ll provide you with a summary of the
            discussion, along with any recommendations or proposed next steps.
            You’re free to decide whether you’d like to proceed with our
            services.
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
             What information should I prepare for the free consultation?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            To make the most of your consultation, It’s helpful to have a
            general overview of your project, key objectives, and any specific
            questions or challenges you’d like to discuss.
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
             Is there any commitment after the free consultation?
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <img src={left} alt="left" className="left" />
          <p className="accordiantext">
            No, there is no commitment required. The free consultation is the
            opportunity for us to understand your needs and for you to explore
            how our services will align with your goals. You decide the next
            steps.
          </p>
          <img src={right} alt="right" className="right" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FreeAccordian;
