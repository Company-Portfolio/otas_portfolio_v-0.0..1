import React from "react";
import { Button, Grid } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function ConnectWithus() {
  return (
    <Grid
      container
      sx={{ marginTop: "100px", marginX: { xs: "10px", md: "0" } }}
    >
      <Grid
        item
        xs={12}
        className="serviceHeader"
        sx={{ textAlign: "center", marginBottom: "100px" }}
      >
        <p className="text">Create Solutions With Us</p>
        <span className="text">
          We invite you into our iterative and collaborative
          <br />
          process, working hand in hand to shape ideas,
          <br />
          refine concepts, and craft tailor-made solutions
          <br />
          that precisely align with your vision and business
          <br />
          goals.
        </span>
      </Grid>
      <Grid item xs={12} md={6} sx={{ margin: "auto" }}>
        <form className="form">
          <div className="input-container">
            <ApartmentIcon className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Company Name"
              name="company"
            ></input>
          </div>

          <div className="input-container">
            <AlternateEmailIcon className="icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              name="email"
            ></input>
          </div>
          <Button
            variant="contained"
            className="connectbtn"
            sx={{ textAlign: "center" }}
          >
            Connect With Us
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default ConnectWithus;
