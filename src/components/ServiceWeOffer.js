import React from "react";
import { Grid } from "@mui/material";

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
      <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
        <div
          style={{
            backgroundColor: "#75ABFE",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p className="text">Web Development</p>
        </div>
        <div
          style={{
            backgroundColor: "#75ABFE",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <p className="text">App Development</p>
        </div>
        <div
          style={{
            backgroundColor: "#75ABFE",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p className="text">Free Consulting</p>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item xs={12} lg={4}>
          <div className="card">
            <img src="https://picsum.photos/id/1005/200/300" alt="card" />
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
            <img src="https://picsum.photos/id/1005/200/300" alt="card" />
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
            <img src="https://picsum.photos/id/1005/200/300" alt="card" />
            <div className="card-body">
              <h5 className="card-title">Free Consulting Service</h5>
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
