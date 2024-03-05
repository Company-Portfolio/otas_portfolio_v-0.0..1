import { Grid } from "@mui/material";
import React from "react";
import icon1 from "./../assets/img/icon1.png";
import icon2 from "./../assets/img/icon2.png";
import icon3 from "./../assets/img/icon3.png";
import icon4 from "./../assets/img/icon4.png";
import icon5 from "./../assets/img/icon5.png";
import icon6 from "./../assets/img/icon6.png";
import icon7 from "./../assets/img/icon7.png";
import icon8 from "./../assets/img/icon8.png";
import icon9 from "./../assets/img/icon9.png";
import icon10 from "./../assets/img/icon10.png";

function OurValue() {
  return (
    <Grid container sx={{ marginY: { xs: "10px", md: "100px" } }}>
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: { xs: "10px", md: "50px" } }}
      >
        <p className="text">Our Value</p>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon1} alt="card" className="ourValueIcon" />
            <p>Innovation is at the core of who we are.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon2} alt="card" className="ourValueIcon" />
            <p>Integrity is the foundation of our relationships.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon3} alt="card" className="ourValueIcon" />
            <p>Collaboration is key to our success.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon4} alt="card" className="ourValueIcon" />
            <p>Our clients are our priority</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon5} alt="card" className="ourValueIcon" />
            <p>We value continuous learning and growth.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon6} alt="card" className="ourValueIcon" />
            <p>Responsibility guides our actions..</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon7} alt="card" className="ourValueIcon" />
            <p>Empathy is at the heart of our interactions.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div>
          <div className="ourValueCard">
            <img src={icon8} alt="card" className="ourValueIcon" />
            <p>
              We are dedicated to delivering excellence in everything we do.
            </p>
          </div>
        </div>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6} md={3}>
          <div style={{ float: "right" }}>
            <div className="ourValueCard">
              <img src={icon9} alt="card" className="ourValueIcon" />
              <p>Transparency is our commitment to openness and honesty.</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div>
            <div className="ourValueCard right">
              <img src={icon10} alt="card" className="ourValueIcon" />
              <p>
                {" "}
                Social responsibility is woven into the fabric of our company.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurValue;
