import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import webimg from "./../assets/img/webimg.png";
import appimg from "./../assets/img/appimg.png";
import free from "./../assets/img/freeimg.png";

function ServiceWeOffer() {
  return (
    <Grid container sx={{ marginX: { xs: "10px", md: "0" } }}>
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: "50px" }}
      >
        <p className="text">Service We Offer</p>
        <span className="text">
          Our expertise lies in developing robust platforms tailored to your{" "}
          <br /> needs, ensuring seamless operations and digital growth for your{" "}
          <br />
          business. Whether you need powerful websites, or tailored <br />
          software, innovative apps, we craft solutions to amplify your
          <br />
          success. With a client-focused approach, our seasoned team
          <br />
          ensures each product aligns perfectly with your goals.
        </span>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          display: { xs: "block", md: "flex" },
        }}
      >
        <Grid item xs={12} lg={4}>
          <div className="card">
            <div className="card-imgs">
              <img src={webimg} alt="card" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Our approach blends intuitive design with seamless
                functionality, creating websites that not only captivate but
                also drive engagement ..
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card">
            <div className="app-imgs">
              <img src={appimg} alt="card" />
            </div>
            <div className="card-body">
              <h5 className="card-title">App Development</h5>
              <p className="card-text">
                Our focus on personalized strategies ensures your app aligns
                perfectly with your vision and goals. With a commitment to ....
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card">
            <div className="card-imgs">
              <img src={free} alt="card" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Free Consulting</h5>
              <p className="card-text">
                Our free consultations delve deep into your business goals,
                providing customized strategies and actionable advice to ...
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ServiceWeOffer;
