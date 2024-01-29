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

export default function AccordionSmall({ data }) {
  console.log(data);
  const accordionArray = ["one", "two", "three", "four", "five"];
  //   console.log(accordionArray);
  return (
    <div>
      {data.map((accordionItem, index) => {
        return (
          <Accordion key={index} sx={{ marginY: "10px" }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{ color: "#000" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="accordianHeaderContainer"
              sx={{
                backgroundColor: "#263238",
              }}
            >
              <Grid sx={{ display: { xs: "none", md: "block" } }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M7.5 31.5C6.675 31.5 5.96875 31.2063 5.38125 30.6188C4.79375 30.0313 4.5 29.325 4.5 28.5V7.5C4.5 6.675 4.79375 5.96875 5.38125 5.38125C5.96875 4.79375 6.675 4.5 7.5 4.5H28.5C29.325 4.5 30.0313 4.79375 30.6188 5.38125C31.2063 5.96875 31.5 6.675 31.5 7.5V28.5C31.5 29.325 31.2063 30.0313 30.6188 30.6188C30.0313 31.2063 29.325 31.5 28.5 31.5H7.5ZM7.5 28.5H28.5V7.5H7.5V28.5ZM9 25.5H27L21.375 18L16.875 24L13.5 19.5L9 25.5Z"
                    fill="white"
                  />
                </svg>
              </Grid>
              <span className="accordianHeader"> FAQ Number 1</span>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex" }}>
              <img src={left} alt="left" className="left" />
              <p className="accordiantext">{accordionItem}</p>
              <img src={right} alt="right" className="right" />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
